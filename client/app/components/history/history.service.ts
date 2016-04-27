import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {SocketService} from './../../socket.service';
import {IRecord} from './../../interfaces/record.interface';
import {Router} from "angular2/router";

@Injectable()
export class HistoryService {
    stream$:Observable<IRecord[]>;
    ioStream$:Observable<any[]>;
    history$:Observable<any[]>;
    options$:Observable<any[]>;
    private _observer;
    private _ioObserver;
    private _observerOptions;
    private _dataStore: {
        history: any[],
        options: any[]
    };
    private _dataCache = [];

    constructor(private _http:Http, private _socketService:SocketService, private _router:Router) {
        // this._dataStore = {
        //     history: [],
        //     options: []
        // };
        // this.stream$ = new Observable(observer => this._observer = observer).share();
        // this.ioStream$ = new Observable(observer => this._ioObserver = observer).share();
        // this.options$ = new Observable(observer => this._observerOptions = observer).share();
        //
        // this.history$ = Observable.merge(this.stream$, this._socketService.observe('NEW_RECORD'));
        //
        // this._http
        //     .get('personal/history')
        //     .map(res => res.json())
        //     // .catch(this.handleError)
        //     .subscribe(data => {
        //         // Update data store
        //         this._dataStore.history = data;
        //         // Push the new list of todos into the Observable stream
        //         this._observer.next(this._dataStore.history);
        //     }, this.handleError);
        //
        // this._http
        //     .get('personal/options')
        //     .map(res => res.json())
        //     .subscribe(data => {
        //         // Update data store
        //         this._dataStore.options = data;
        //         // Push the new list of todos into the Observable stream
        //         this._observerOptions.next(this._dataStore.options);
        //     }, error => console.log('Could not load todos.'));
    }

    loadAll(filter):Observable<IRecord[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('personal/history', JSON.stringify(filter), {headers: headers})
            .map(res => res.json())
            .merge(this._socketService.observe('NEW_RECORD'))
            .map(data => {
                if (Array.isArray(data)) {
                    this._dataCache = data.map(data => new Record(data));
                } else {
                    this._dataCache.unshift(new Record(data));
                }
                return this._dataCache;
            })
            .catch(this.authError.bind(this));
    }

    getOptions():Observable<any[]> {
        return this._http
            .get('personal/options')
            .map(res => res.json())
            .catch(this.authError.bind(this));
    }

    getHistory():Observable<any[]> {
        return this._http
            .get('personal/history')
            .map(res => res.json())
            .catch(this.authError.bind(this));
    }

    create(record):Observable<any[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('personal/create', JSON.stringify(record), {headers: headers})
            .map(res => res.json())
            .catch(this.authError.bind(this));
    }

    private authError(err):Observable<any> {
        if (err.status == 401) {
            this._router.navigate(['Login']);
        }
        return Observable.empty();
    }
}

class Record {
    constructor(data) {
        Object.keys(data).forEach(k => {
            this[k] = data[k];
        });
        this['createdAt'] = new Date(this['createdAt']);
    }
}
