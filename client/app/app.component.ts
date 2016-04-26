// angular core
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
// angular2-material 
import {MdButton} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
// custom
import {HistoryComponent} from './components/history/history.component';
import {LoginComponent} from './components/login/login.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        MdButton,
        MD_INPUT_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
    ]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/history',
        name: 'History',
        component: HistoryComponent,
        useAsDefault: true
    }
])
export class AppComponent {}
