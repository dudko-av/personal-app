import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {DashboardHeaderComponent} from './dashboard-header.component';
import {DashboardNavComponent} from './dashboard-nav.component';
import {HistoryComponent} from '../history/history.component'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.template.html',
    directives: [
        DashboardHeaderComponent,
        DashboardNavComponent,
        HistoryComponent
    ]
})
export class DashboardComponent implements AfterViewInit {
    constructor(private _elemRef:ElementRef) {
    }

    ngAfterViewInit() {
    }
}
