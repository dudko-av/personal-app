// angular core
import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
// custom
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
    ]
})
@Routes([
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        component: DashboardComponent
    },
    {
        path: '/history',
        component: HistoryComponent
    }
])
export class AppComponent implements OnInit {
    constructor(private _router:Router) {
    }

    ngOnInit() {
        this._router.navigateByUrl('/dashboard');
    }
}
