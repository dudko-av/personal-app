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
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
var dashboard_header_component_1 = require('./dashboard-header.component');
var dashboard_nav_component_1 = require('./dashboard-nav.component');
var history_component_1 = require('../history/history.component');
var auth_service_1 = require('../../services/auth.service');
var DashboardComponent = (function () {
    function DashboardComponent(_auth) {
        this._auth = _auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.getUser().subscribe(function (user) { return _this.user = user; });
    };
    DashboardComponent.prototype.showDetails = function (record) {
        this.record = record;
    };
    DashboardComponent.prototype.setClass = function (cmpName) {
        var cssClass = {};
        switch (cmpName) {
            case 'history':
                cssClass['mdl-cell--8-col'] = !!this.record;
                cssClass['mdl-cell--12-col'] = !this.record;
        }
        return cssClass;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.template.html',
            directives: [
                input_1.MD_INPUT_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                dashboard_header_component_1.DashboardHeaderComponent,
                dashboard_nav_component_1.DashboardNavComponent,
                history_component_1.HistoryComponent
            ],
            providers: [
                auth_service_1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map