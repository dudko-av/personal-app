import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SocketService {
    private _io;
    private _socket;
    private _namedStorage;

    constructor() {
        this._io = io;
        this._socket = this._io.connect();
        this._namedStorage = this._namedStorage || {};
    }

    connect() {
        this._socket = this._socket || this._io.connect();
    }

    on(name, callback) {
        this._socket.on(name, callback);
    }

    observe(name):Observable<any> {
        if (!this._namedStorage[name]) {
            this._namedStorage[name] = new Observable(observer => {
                this._socket.on(name, data => {
                    observer.next(data);
                });
            }).share();
        }
        return this._namedStorage[name];
    }
}
