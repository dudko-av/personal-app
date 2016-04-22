System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', './socket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, socket_service_1;
    var HistoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            HistoryService = (function () {
                function HistoryService(_http, _socketService) {
                    var _this = this;
                    this._http = _http;
                    this._socketService = _socketService;
                    this._dataStore = {
                        history: [],
                        options: []
                    };
                    this.stream$ = new Observable_1.Observable(function (observer) { return _this._observer = observer; }).share();
                    this.options$ = new Observable_1.Observable(function (observer) { return _this._observerOptions = observer; }).share();
                    this._http
                        .get('personal/history')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        // Update data store
                        _this._dataStore.history = data;
                        // Push the new list of todos into the Observable stream
                        _this._observer.next(_this._dataStore.history);
                    }, function (error) { return console.log('Could not load todos.'); });
                    this._http
                        .get('personal/options')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        // Update data store
                        _this._dataStore.options = data;
                        // Push the new list of todos into the Observable stream
                        _this._observerOptions.next(_this._dataStore.options);
                    }, function (error) { return console.log('Could not load todos.'); });
                    this._socketService.on('NEW_RECORD', function (record) {
                        _this._dataStore.history.unshift(record);
                        _this._observer.next(_this._dataStore.history);
                    });
                }
                HistoryService.prototype.loadAll = function () {
                    return this.stream$;
                };
                HistoryService.prototype.getOptions = function () {
                    return this.options$;
                };
                HistoryService.prototype.getHistory = function () {
                    return this._http
                        .get('personal/history')
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HistoryService.prototype.create = function (record) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http
                        .post('personal/create', JSON.stringify(record), { headers: headers })
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HistoryService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var data = res.json();
                    return data || [];
                };
                HistoryService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                HistoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService])
                ], HistoryService);
                return HistoryService;
            }());
            exports_1("HistoryService", HistoryService);
        }
    }
});
//# sourceMappingURL=history.service.js.map