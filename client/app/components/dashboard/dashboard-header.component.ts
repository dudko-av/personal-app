import {Component, Input} from 'angular2/core';

@Component({
    selector: 'dashboard-header',
    templateUrl: 'app/components/dashboard/dashboard-header.template.html'
})
export class DashboardHeaderComponent {
    @Input() user;
}
