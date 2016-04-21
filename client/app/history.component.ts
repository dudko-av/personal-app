import {Component, OnInit} from 'angular2/core';
import 'rxjs/Rx';

import {HistoryService} from './history.service';

@Component({
    selector: 'history-component',
    template: `
        <div class="panel panel-default">
            <div class="panel-body">
                <table class="table table-condensed">
                    <thead>
                        <th>Time</th>
                        <th>Comment</th>
                        <th>Volume</th>
                    </thead>
                    <tbody>
                        <tr *ngFor="#record of history">
                            <td>{{record.createdAt}}</td>
                            <td>{{record.comment}}</td>
                            <td>{{record.volume}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    providers: [HistoryService]
})
export class HistoryComponent {
    history;

    constructor(private _historyService:HistoryService) {}

    ngOnInit() {
        this._historyService
            .getHistory()
            .subscribe(list => this.history = list);
    }
}
