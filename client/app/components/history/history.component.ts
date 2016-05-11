import {Component, OnInit} from 'angular2/core';
import 'rxjs/Rx';

// angular2-material
import {MdButton} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import {HistoryService} from './history.service';
import {SocketService} from "../../socket.service";


@Component({
    selector: 'history-component',
    templateUrl: 'app/components/history/history.template.html',
    directives: [
        MdButton,
        MD_INPUT_DIRECTIVES
    ],
    providers: [
        HistoryService,
        SocketService
    ]
})
export class HistoryComponent implements OnInit {
    record:Record;
    options$;
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
        this.record = new Record();
        this.options$ = this._historyService.getOptions();
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

    addRecord(record) {
        this._historyService
            .create(record)
            .subscribe(res => {
                this.record = new Record();
            });
    }

    deleteRecord(record) {
        this._historyService.deleteRecord(record);
    }

    // TODO
    load(fromDate) {
        this._historyService.loadAll({createdAt: fromDate}).subscribe(data => {
            this.history = data;
            this.calculate();
        });
    }
}

class Record {
    constructor(public comment = '', public volume = '') {
    }
}
