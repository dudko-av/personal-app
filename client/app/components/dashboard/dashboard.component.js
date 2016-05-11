System.register(['angular2/core', './dashboard-header.component', './dashboard-nav.component', '../history/history.component', '../../services/auth.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, dashboard_header_component_1, dashboard_nav_component_1, history_component_1, auth_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_header_component_1_1) {
                dashboard_header_component_1 = dashboard_header_component_1_1;
            },
            function (dashboard_nav_component_1_1) {
                dashboard_nav_component_1 = dashboard_nav_component_1_1;
            },
            function (history_component_1_1) {
                history_component_1 = history_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
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
                        selector: 'dashboard',
                        templateUrl: 'app/components/dashboard/dashboard.template.html',
                        directives: [
                            dashboard_header_component_1.DashboardHeaderComponent,
                            dashboard_nav_component_1.DashboardNavComponent,
                            history_component_1.HistoryComponent
                        ],
                        providers: [
                            auth_service_1.AuthService
                        ]
                    }),
                    router_1.CanActivate(function () {
                        return true;
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, auth_service_1.AuthService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map