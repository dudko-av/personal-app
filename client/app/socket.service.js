"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var core_1 = require('@angular/core');
var SocketService = (function () {
    function SocketService() {
        this._io = io;
        this._socket = this._io.connect();
        this._namedStorage = this._namedStorage || {};
    }
    SocketService.prototype.connect = function () {
        this._socket = this._socket || this._io.connect();
    };
    SocketService.prototype.on = function (name, callback) {
        this._socket.on(name, callback);
    };
    SocketService.prototype.observe = function (name) {
        var _this = this;
        if (!this._namedStorage[name]) {
            this._namedStorage[name] = new Observable_1.Observable(function (observer) {
                _this._socket.on(name, function (data) {
                    observer.next(data);
                });
            }).share();
        }
        return this._namedStorage[name];
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map