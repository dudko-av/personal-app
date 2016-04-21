import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SocketService {
    private _io;
    private _socket;

    constructor() {
        this._io = io;
    }

    connect() {
        this._socket = this._io.connect();
    }

    on(name, callback) {
        this._socket.on(name, callback);
    }
}
