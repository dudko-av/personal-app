import {Component, OnInit} from 'angular2/core';
import 'rxjs/Rx';

import {HistoryService} from './history.service';
import {SocketService} from './socket.service';

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
    providers: []
})
export class HistoryComponent {
    history:[];

    constructor(private _historyService:HistoryService, private _socketService:SocketService) {}

    ngOnInit() {
        this._historyService
            .getHistory()
            .subscribe(list => this.history = list);

        this._socketService.on('NEW_RECORD', record => {
            this.history.unshift(record);
        });
    }
}
