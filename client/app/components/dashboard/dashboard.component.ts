import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import {DashboardHeaderComponent} from './dashboard-header.component';
import {DashboardNavComponent} from './dashboard-nav.component';
import {HistoryComponent} from '../history/history.component'
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.template.html',
    directives: [
        DashboardHeaderComponent,
        DashboardNavComponent,
        HistoryComponent
    ],
    providers: [
        AuthService
    ]
})
export class DashboardComponent implements OnInit, AfterViewInit {
    user;
    constructor(private _elemRef:ElementRef, private _auth:AuthService) {
    }
    
    ngOnInit() {
        this._auth.getUser().subscribe(user => this.user = user);
   }

    ngAfterViewInit() {
    }
}
