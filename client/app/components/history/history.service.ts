import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {SocketService} from './../../socket.service';
import {IRecord} from './../../interfaces/record.interface';
import {Router} from "@angular/router";
import {isObject} from "rxjs/util/isObject";

@Injectable()
export class HistoryService {
    history$:Observable<Record[]>;
    private _historyObserver;
    private _dataStore:Record[] = [];

    constructor(private _http:Http, private _socketService:SocketService, private _router:Router) {
        this.history$ = new Observable(observer => {
                this._historyObserver = observer;
            })
            .merge(this._socketService.observe('NEW_RECORD'))
            .map(data => {
                if (Array.isArray(data)) {
                    this._dataStore = data;
                } else if (isObject(data)) {
                    this._dataStore.unshift(new Record(data));
                } else if (typeof data === 'string') {
                    this._dataStore.forEach((v:Record, i:number) => {
                        if (v._id === data) {
                            this._dataStore.splice(i, 1);
                        }
                    });
                }
                return this._dataStore;
            })
            .share();
    }

    load(filter?) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http
            .post('personal/history', JSON.stringify(filter), {headers: headers})
            .map(res => res.json().map(v => new Record(v)))
            .catch(this.authError.bind(this))
            .subscribe(history => {
                this._historyObserver.next(history);
            });
    }

    create(record:Record):Observable<Record> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('personal/create', JSON.stringify(record), {headers: headers})
            .map(res => res.json())
            .catch<Record>(this.authError.bind(this));
    }

    deleteRecord(record):boolean {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http
            .post('personal/delete', JSON.stringify({id: record._id}), {headers: headers})
            .map(res => res.json())
            .catch(this.authError.bind(this))
            .subscribe((res:Record) => {
                this._historyObserver.next(res._id);
            });

        return true;
    }

    /**
     * Fetch option buttons
     *
     * @returns {Observable<Record[]>}
     */
    getOptions():Observable<Record[]> {
        return this._http
            .get('personal/options')
            .map(res => res.json())
            .catch<Record[]>(this.authError.bind(this));
    }

    private authError(err):Observable<any> {
        if (err.status == 401) {
            this._router.navigateByUrl('/login');
        }
        return Observable.empty();
    }
}

export class Record {
    _id:string; // "5735d38d02f77d5421e79db0"
    comment:string; // "qwe"
    createdAt:Date; // "2016-05-13T13:15:57.475Z"
    createdBy:Object; // {_id: "571e1fa8048e8fb014b424b4", displayName: "Alexander Dudko", provider: "facebook",…}
    type:number; //0
    volume:string; // 33

    constructor(data:Object) {
        Object.keys(data).forEach(k => this[k] = data[k]);
        if (data['createdAt']) { this.createdAt = new Date(data['createdAt']); }
    }
}
