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
// angular core
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// custom
var history_component_1 = require('./components/history/history.component');
var login_component_1 = require('./components/login/login.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [
                router_1.ROUTER_PROVIDERS,
            ]
        }),
        router_1.Routes([
            {
                path: '/login',
                component: login_component_1.LoginComponent
            },
            {
                path: '/dashboard',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: '/history',
                component: history_component_1.HistoryComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map