import {Component, OnInit} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
// angular2-material
import {MdButton} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
    selector: 'login-component',
    templateUrl: 'app/components/login/login.template.html',
    directives: [
        MdButton,
        MD_INPUT_DIRECTIVES
    ]
})
export class LoginComponent implements OnInit{
    constructor(private _http:Http, private _router:Router) {
    }

    ngOnInit() {
    }

    login() {
        window.location.assign('auth/facebook');
    }
}
