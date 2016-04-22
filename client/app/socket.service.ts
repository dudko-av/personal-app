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
}
