import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'app/components/login/login.template.html',
    directives: []
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
