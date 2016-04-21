System.register(['angular2/core', './history.service', './history.component'], function(exports_1, context_1) {
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
    var core_1, history_service_1, history_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (history_service_1_1) {
                history_service_1 = history_service_1_1;
            },
            function (history_component_1_1) {
                history_component_1 = history_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_historyService) {
                    this._historyService = _historyService;
                    this.record = {
                        comment: '',
                        volume: ''
                    };
                    this.options = [
                        'Продукты',
                        'Проезд',
                        'Квартира',
                        'Отдых',
                        'Одежда',
                        'Прочее'
                    ];
                }
                AppComponent.prototype.addRecord = function (record) {
                    this._historyService
                        .create(record)
                        .subscribe(function (res) {
                        var t = res;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form style=\"margin-bottom: 15px;\">\n            <div class=\"form-group\">\n                <label>Comment</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.comment\" />\n            </div>            \n            <div style=\"margin-bottom: 15px;\">\n                <button *ngFor=\"#opt of options\" \n                        type=\"button\" \n                        style=\"margin-bottom: 7px; margin-right: 7px;\"\n                        class=\"btn btn-default btn-sm\" \n                        (click)=\"record.comment = opt\">{{opt}}</button>\n            </div>\n            <div class=\"form-group\">\n                <label>Volume</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.volume\" />\n            </div>\n\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRecord(record)\">ADD</button>\n        </form>\n\n        <history-component></history-component>\n    ",
                        directives: [history_component_1.HistoryComponent],
                        providers: [history_service_1.HistoryService]
                    }), 
                    __metadata('design:paramtypes', [history_service_1.HistoryService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map