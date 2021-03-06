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
require('rxjs/Rx');
var history_service_1 = require('./history.service');
var socket_service_1 = require("../../socket.service");
var HistoryComponent = (function () {
    function HistoryComponent(_historyService) {
        this._historyService = _historyService;
        this.outlay = 0;
        this.income = 0;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.record = new history_service_1.Record({ comment: '', volume: '' });
        this.options$ = this._historyService.getOptions();
        this.history$ = this._historyService.history$;
        this.history$.subscribe(function (history) {
            var outlay = 0;
            history.forEach(function (r) { return outlay += r.volume; });
            _this.outlay = outlay;
        });
        this.outlay$ = this.history$.map(function (v) {
            var sum = 0;
            v.filter(function (r) { return r.type === 0; }).forEach(function (r) { return sum += parseInt(r.volume); });
            return sum;
        });
        this.load();
    };
    HistoryComponent.prototype.addRecord = function (record) {
        var _this = this;
        this._historyService
            .create(record)
            .subscribe(function () {
            _this.record = new history_service_1.Record({ comment: '', volume: '' });
        });
    };
    HistoryComponent.prototype.deleteRecord = function (record) {
        this._historyService.deleteRecord(record);
    };
    // TODO
    HistoryComponent.prototype.load = function (fromDate) {
        this._historyService.load({ createdAt: fromDate });
    };
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'history-component',
            templateUrl: 'history.template.html',
            directives: [],
            providers: [
                history_service_1.HistoryService,
                socket_service_1.SocketService
            ]
        }), 
        __metadata('design:paramtypes', [history_service_1.HistoryService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map