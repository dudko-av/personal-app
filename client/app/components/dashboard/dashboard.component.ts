import { Component, OnInit } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { DashboardHeaderComponent } from './dashboard-header.component';
import { DashboardNavComponent } from './dashboard-nav.component';
import { HistoryComponent } from '../history/history.component'
import { AuthService } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html',
    directives: [
        MD_INPUT_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        DashboardHeaderComponent,
        DashboardNavComponent,
        HistoryComponent
    ],
    providers: [
        AuthService
    ]
})
export class DashboardComponent implements OnInit {
    user;
    record;
    
    constructor(private _auth:AuthService) {
    }
    
    ngOnInit() {
        this._auth.getUser().subscribe(user => this.user = user);
   }

    showDetails(record) {
        this.record = record;
    }

    setClass(cmpName:string) {
        let cssClass = {};
        switch (cmpName) {
            case 'history':
                cssClass['mdl-cell--8-col'] = !!this.record;
                cssClass['mdl-cell--12-col'] = !this.record;
        }
        return cssClass;
    }
 }
