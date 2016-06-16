import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DashboardHeaderComponent } from './dashboard-header.component';
import { DashboardNavComponent } from './dashboard-nav.component';
import { HistoryComponent } from '../history/history.component'
import { AuthService } from '../../services/auth.service';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html',
    styleUrls: ['dashboard.component.css'],
    directives: [
        MdButton,
        MdIcon,
        MD_SIDENAV_DIRECTIVES,
        MdToolbar,
        MD_LIST_DIRECTIVES,
        MD_GRID_LIST_DIRECTIVES,
        DashboardHeaderComponent,
        DashboardNavComponent,
        HistoryComponent
    ],
    providers: [
        AuthService,
        MdIconRegistry
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
