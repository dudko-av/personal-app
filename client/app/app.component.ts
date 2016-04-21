import {Component} from 'angular2/core';

import {HistoryService} from './history.service';
import {HistoryComponent} from './history.component';
import {SocketService} from './socket.service';

@Component({
    selector: 'my-app',
    template: `
        <form style="margin-bottom: 15px;">
            <div class="form-group">
                <label>Comment</label>
                <input type="text" class="form-control" [(ngModel)]="record.comment" />
            </div>            
            <div style="margin-bottom: 15px;">
                <button *ngFor="#opt of options" 
                        type="button" 
                        style="margin-bottom: 7px; margin-right: 7px;"
                        class="btn btn-default btn-sm" 
                        (click)="record.comment = opt">{{opt}}</button>
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
    providers: [
        HistoryService,
        SocketService
    ]
})

export class AppComponent {
    record = {
        comment: '',
        volume: ''
    };

    options = [
        'Продукты',
        'Проезд',
        'Квартира',
        'Отдых',
        'Одежда',
        'Прочее'
    ];

    constructor(private _historyService:HistoryService, private _socketService:SocketService) {
        _socketService.connect();
    }

    addRecord(record) {
        this._historyService
            .create(record)
            .subscribe(function (res) {
                var t = res;
            });
    }
}
