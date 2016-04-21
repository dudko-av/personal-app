System.register(['angular2/core', 'rxjs/Rx', './history.service', './socket.service'], function(exports_1, context_1) {
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
    var core_1, history_service_1, socket_service_1;
    var HistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (history_service_1_1) {
                history_service_1 = history_service_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent(_historyService, _socketService) {
                    this._historyService = _historyService;
                    this._socketService = _socketService;
                }
                HistoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._historyService
                        .getHistory()
                        .subscribe(function (list) { return _this.history = list; });
                    this._socketService.on('NEW_RECORD', function (record) {
                        _this.history.unshift(record);
                    });
                };
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'history-component',
                        template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <table class=\"table table-condensed\">\n                    <thead>\n                        <th>Time</th>\n                        <th>Comment</th>\n                        <th>Volume</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#record of history\">\n                            <td>{{record.createdAt}}</td>\n                            <td>{{record.comment}}</td>\n                            <td>{{record.volume}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    ",
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [history_service_1.HistoryService, socket_service_1.SocketService])
                ], HistoryComponent);
                return HistoryComponent;
            }());
            exports_1("HistoryComponent", HistoryComponent);
        }
    }
});
//# sourceMappingURL=history.component.js.map