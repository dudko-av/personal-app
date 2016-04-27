import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// import {SocketService} from './../../socket.service';
// import {IRecord} from './../../interfaces/record.interface';
// import {Router} from "angular2/router";

@Injectable()
export class AuthService {
    _user;

    constructor(private _http:Http) {
    }

    getUser() {
        if (!this._user) {
            this._user = this._http.get('auth/user')
                .map(res => res.json())
                .catch(() => {
                    return Observable.empty();
                });
        }
        return this._user;
    }
}
