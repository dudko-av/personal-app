System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', '@angular2-material/button', '@angular2-material/input'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, button_1, input_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    window.location.assign('auth/facebook');
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        templateUrl: 'app/components/login/login.template.html',
                        directives: [
                            button_1.MdButton,
                            input_1.MD_INPUT_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map