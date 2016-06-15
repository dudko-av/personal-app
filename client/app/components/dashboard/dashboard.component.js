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
var dashboard_header_component_1 = require('./dashboard-header.component');
var dashboard_nav_component_1 = require('./dashboard-nav.component');
var history_component_1 = require('../history/history.component');
var auth_service_1 = require('../../services/auth.service');
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var list_1 = require('@angular2-material/list');
var grid_list_1 = require('@angular2-material/grid-list');
var DashboardComponent = (function () {
    function DashboardComponent(_elemRef, _auth) {
        this._elemRef = _elemRef;
        this._auth = _auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.getUser().subscribe(function (user) { return _this.user = user; });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.template.html',
            styleUrls: ['dashboard.component.css'],
            directives: [
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                toolbar_1.MdToolbar,
                list_1.MD_LIST_DIRECTIVES,
                grid_list_1.MD_GRID_LIST_DIRECTIVES,
                dashboard_header_component_1.DashboardHeaderComponent,
                dashboard_nav_component_1.DashboardNavComponent,
                history_component_1.HistoryComponent
            ],
            providers: [
                auth_service_1.AuthService,
                icon_1.MdIconRegistry
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, auth_service_1.AuthService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map