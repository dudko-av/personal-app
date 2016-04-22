import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {SocketService} from './socket.service';
import {IRecord} from './interfaces/record.interface';

@Injectable()
export class HistoryService {
    stream$:Observable<IRecord[]>;
    options$:Observable<any[]>;
    private _observer;
    private _observerOptions;
    private _dataStore: {
        history: Array<any[]>,
        options: Array<any[]>
    };

    constructor(private _http:Http, private _socketService:SocketService) {
        this._dataStore = {
            history: [],
            options: []
        };
        this.stream$ = new Observable(observer => this._observer = observer).share();
        this.options$ = new Observable(observer => this._observerOptions = observer).share();

        this._http
            .get('personal/history')
            .map(res => res.json())
            .subscribe(data => {
                // Update data store
                this._dataStore.history = data;
                // Push the new list of todos into the Observable stream
                this._observer.next(this._dataStore.history);
            }, error => console.log('Could not load todos.'));

        this._http
            .get('personal/options')
            .map(res => res.json())
            .subscribe(data => {
                // Update data store
                this._dataStore.options = data;
                // Push the new list of todos into the Observable stream
                this._observerOptions.next(this._dataStore.options);
            }, error => console.log('Could not load todos.'));

        this._socketService.on('NEW_RECORD', record => {
            this._dataStore.history.unshift(record);
            this._observer.next(this._dataStore.history);
        });
    }

    loadAll():Observable<IRecord[]> {
        return this.stream$;
    }

    getOptions():Observable<any[]> {
        return this.options$;
    }

    getHistory():Observable<any[]> {
        return this._http
            .get('personal/history')
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(record):Observable<any[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('personal/create', JSON.stringify(record), {headers: headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let data = res.json();
        return data || [];
    }

    private handleError(error:any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
