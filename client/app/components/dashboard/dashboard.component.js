System.register(['angular2/core', './dashboard-header.component', './dashboard-nav.component', '../history/history.component'], function(exports_1, context_1) {
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
    var core_1, dashboard_header_component_1, dashboard_nav_component_1, history_component_1;
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
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_elemRef) {
                    this._elemRef = _elemRef;
                }
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
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map