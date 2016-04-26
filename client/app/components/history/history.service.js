System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', './../../socket.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, socket_service_1, router_1;
    var HistoryService, Record;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HistoryService = (function () {
                function HistoryService(_http, _socketService, _router) {
                    this._http = _http;
                    this._socketService = _socketService;
                    this._router = _router;
                    this._dataCache = [];
                    // this._dataStore = {
                    //     history: [],
                    //     options: []
                    // };
                    // this.stream$ = new Observable(observer => this._observer = observer).share();
                    // this.ioStream$ = new Observable(observer => this._ioObserver = observer).share();
                    // this.options$ = new Observable(observer => this._observerOptions = observer).share();
                    //
                    // this.history$ = Observable.merge(this.stream$, this._socketService.observe('NEW_RECORD'));
                    //
                    // this._http
                    //     .get('personal/history')
                    //     .map(res => res.json())
                    //     // .catch(this.handleError)
                    //     .subscribe(data => {
                    //         // Update data store
                    //         this._dataStore.history = data;
                    //         // Push the new list of todos into the Observable stream
                    //         this._observer.next(this._dataStore.history);
                    //     }, this.handleError);
                    //
                    // this._http
                    //     .get('personal/options')
                    //     .map(res => res.json())
                    //     .subscribe(data => {
                    //         // Update data store
                    //         this._dataStore.options = data;
                    //         // Push the new list of todos into the Observable stream
                    //         this._observerOptions.next(this._dataStore.options);
                    //     }, error => console.log('Could not load todos.'));
                }
                HistoryService.prototype.loadAll = function () {
                    var _this = this;
                    return this._http
                        .get('personal/history')
                        .map(function (res) { return res.json(); })
                        .merge(this._socketService.observe('NEW_RECORD'))
                        .map(function (data) {
                        if (Array.isArray(data)) {
                            _this._dataCache = data.map(function (data) { return new Record(data); });
                        }
                        else {
                            _this._dataCache.unshift(new Record(data));
                        }
                        return _this._dataCache;
                    })
                        .catch(this.authError.bind(this));
                };
                HistoryService.prototype.getOptions = function () {
                    return this._http
                        .get('personal/options')
                        .map(function (res) { return res.json(); })
                        .catch(this.authError.bind(this));
                };
                HistoryService.prototype.getHistory = function () {
                    return this._http
                        .get('personal/history')
                        .map(function (res) { return res.json(); })
                        .catch(this.authError.bind(this));
                };
                HistoryService.prototype.create = function (record) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http
                        .post('personal/create', JSON.stringify(record), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.authError.bind(this));
                };
                HistoryService.prototype.authError = function (err) {
                    if (err.status == 401) {
                        this._router.navigate(['Login']);
                    }
                    return Observable_1.Observable.empty();
                };
                HistoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService, router_1.Router])
                ], HistoryService);
                return HistoryService;
            }());
            exports_1("HistoryService", HistoryService);
            Record = (function () {
                function Record(data) {
                    var _this = this;
                    Object.keys(data).forEach(function (k) {
                        _this[k] = data[k];
                    });
                    this['createdAt'] = new Date(this['createdAt']);
                }
                return Record;
            }());
        }
    }
});
//# sourceMappingURL=history.service.js.map