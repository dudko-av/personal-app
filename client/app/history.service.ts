import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HistoryService {
    constructor(private _http:Http) {
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
