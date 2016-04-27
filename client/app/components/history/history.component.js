System.register(['angular2/core', 'rxjs/Rx', '@angular2-material/button', '@angular2-material/input', './history.service', "../../socket.service"], function(exports_1, context_1) {
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
    var core_1, button_1, input_1, history_service_1, socket_service_1;
    var HistoryComponent, Record;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (history_service_1_1) {
                history_service_1 = history_service_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent(_historyService) {
                    this._historyService = _historyService;
                    this.outlay = 0;
                    this.income = 0;
                    this.fromDate = new Date(2016, 4, 1);
                }
                HistoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.record = new Record();
                    this.options$ = this._historyService.getOptions();
                    this._historyService.loadAll().subscribe(function (data) {
                        _this.history = data;
                        _this.calculate();
                    });
                };
                HistoryComponent.prototype.calculate = function () {
                    var _this = this;
                    this.outlay = 0;
                    this.income = 0;
                    this.history.forEach(function (r) { return _this.outlay += r.volume; });
                };
                HistoryComponent.prototype.addRecord = function (record) {
                    var _this = this;
                    this._historyService
                        .create(record)
                        .subscribe(function (res) {
                        _this.record = new Record();
                    });
                };
                // TODO
                HistoryComponent.prototype.load = function (fromDate) {
                    var _this = this;
                    this._historyService.loadAll({ createdAt: fromDate }).subscribe(function (data) {
                        _this.history = data;
                        _this.calculate();
                    });
                };
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'history-component',
                        templateUrl: 'app/components/history/history.template.html',
                        directives: [
                            button_1.MdButton,
                            input_1.MD_INPUT_DIRECTIVES
                        ],
                        providers: [
                            history_service_1.HistoryService,
                            socket_service_1.SocketService
                        ]
                    }), 
                    __metadata('design:paramtypes', [history_service_1.HistoryService])
                ], HistoryComponent);
                return HistoryComponent;
            }());
            exports_1("HistoryComponent", HistoryComponent);
            Record = (function () {
                function Record(comment, volume) {
                    if (comment === void 0) { comment = ''; }
                    if (volume === void 0) { volume = ''; }
                    this.comment = comment;
                    this.volume = volume;
                }
                return Record;
            }());
        }
    }
});
//# sourceMappingURL=history.component.js.map