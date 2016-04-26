import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()
export class SocketService {
    private _io;
    private _socket;

    constructor() {
        this._io = io;
        this._socket = this._io.connect();
    }

    connect() {
        this._socket = this._socket || this._io.connect();
    }

    on(name, callback) {
        this._socket.on(name, callback);
    }

    observe(name):Observable<any> {
        return new Observable(observer => {
            this._socket.on(name, data => {
                observer.next(data);
            });
        });
    }
}
