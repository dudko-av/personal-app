import {Component, OnInit} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {HistoryService} from './history.service';
import {IRecord} from './interfaces/record.interface';

@Component({
    selector: 'history-component',
    template: `
        <div class="panel panel-default">
            <div class="panel-body">
                <table class="table table-condensed">
                    <caption class="text-right">
                        <span class="pull-left">
                            <input type="date" class="form-control input-sm" [(ngModel)]="fromDate" />
                        </span>
                        - {{outlay}} / + {{income}}
                    </caption>
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
    history;
    outlay:number;
    income:number;
    fromDate: Date;

    constructor(private _historyService:HistoryService) {
        this.outlay = 0;
        this.income = 0;
        this.fromDate = new Date(2016, 4, 1);
    }

    ngOnInit() {
        this._historyService.loadAll().subscribe(data => {
            this.history = data;
            this.calculate();
        });
    }

    private calculate() {
        this.outlay = 0;
        this.income = 0;
        this.history.forEach(r => this.outlay += r.volume);
    }
}
