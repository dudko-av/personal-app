import {Component} from 'angular2/core';

import {HistoryService} from './history.service';
import {HistoryComponent} from './history.component';

@Component({
    selector: 'my-app',
    template: `
        <form style="margin-bottom: 15px;">
            <div class="form-group">
                <label>Comment</label>
                <input type="text" class="form-control" [(ngModel)]="record.comment" />
            </div>
            <div class="form-group">
                <label>Volume</label>
                <input type="text" class="form-control" [(ngModel)]="record.volume" />
            </div>

            <button type="button" class="btn btn-primary" (click)="addRecord(record)">ADD</button>
        </form>

        <history-component></history-component>
    `,
    directives: [HistoryComponent],
    providers: [HistoryService]
})

export class AppComponent {
    record = {
        comment: '',
        volume: ''
    };

    constructor(private _historyService:HistoryService) {}

    addRecord(record) {
        this._historyService
            .create(record)
            .subscribe(function (res) {
                var t = res;
            });
    }
}
