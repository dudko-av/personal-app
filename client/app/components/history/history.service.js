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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var socket_service_1 = require('./../../socket.service');
var router_1 = require("@angular/router");
var isObject_1 = require("rxjs/util/isObject");
var HistoryService = (function () {
    function HistoryService(_http, _socketService, _router) {
        var _this = this;
        this._http = _http;
        this._socketService = _socketService;
        this._router = _router;
        this._dataStore = [];
        this.history$ = new Observable_1.Observable(function (observer) {
            _this._historyObserver = observer;
        })
            .merge(this._socketService.observe('NEW_RECORD'))
            .map(function (data) {
            if (Array.isArray(data)) {
                _this._dataStore = data;
            }
            else if (isObject_1.isObject(data)) {
                _this._dataStore.unshift(new Record(data));
            }
            else if (typeof data === 'string') {
                _this._dataStore.forEach(function (v, i) {
                    if (v._id === data) {
                        _this._dataStore.splice(i, 1);
                    }
                });
            }
            return _this._dataStore;
        })
            .share();
    }
    HistoryService.prototype.load = function (filter) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http
            .post('personal/history', JSON.stringify(filter), { headers: headers })
            .map(function (res) { return res.json().map(function (v) { return new Record(v); }); })
            .catch(this.authError.bind(this))
            .subscribe(function (history) {
            _this._historyObserver.next(history);
        });
    };
    HistoryService.prototype.create = function (record) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('personal/create', JSON.stringify(record), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.authError.bind(this));
    };
    HistoryService.prototype.deleteRecord = function (record) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http
            .post('personal/delete', JSON.stringify({ id: record._id }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.authError.bind(this))
            .subscribe(function (res) {
            _this._historyObserver.next(res._id);
        });
        return true;
    };
    /**
     * Fetch option buttons
     *
     * @returns {Observable<Record[]>}
     */
    HistoryService.prototype.getOptions = function () {
        return this._http
            .get('personal/options')
            .map(function (res) { return res.json(); })
            .catch(this.authError.bind(this));
    };
    HistoryService.prototype.authError = function (err) {
        if (err.status == 401) {
            this._router.navigateByUrl('/login');
        }
        return Observable_1.Observable.empty();
    };
    HistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService, router_1.Router])
    ], HistoryService);
    return HistoryService;
}());
exports.HistoryService = HistoryService;
var Record = (function () {
    function Record(data) {
        var _this = this;
        Object.keys(data).forEach(function (k) { return _this[k] = data[k]; });
        if (data['createdAt']) {
            this.createdAt = new Date(data['createdAt']);
        }
    }
    return Record;
}());
exports.Record = Record;
//# sourceMappingURL=history.service.js.map