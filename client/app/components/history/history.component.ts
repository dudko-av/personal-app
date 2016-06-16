import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';

import {HistoryService, Record} from './history.service';
import {SocketService} from "../../socket.service";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'history-component',
    templateUrl: 'history.template.html',
    directives: [],
    providers: [
        HistoryService,
        SocketService
    ]
})
export class HistoryComponent implements OnInit {
    record:Record;
    options$;
    history$;
    outlay = 0;
    outlay$:Observable<number>;
    income = 0;
    fromDate: Date;

    constructor(private _historyService:HistoryService) {
    }

    ngOnInit() {
        this.record = new Record({comment: '', volume: ''});
        this.options$ = this._historyService.getOptions();
        this.history$ = this._historyService.history$;
        this.history$.subscribe(history => {
            let outlay = 0;
            history.forEach(r => outlay += r.volume);
            this.outlay = outlay;
        });
        this.outlay$ = this.history$.map((v:Array<Record>) => {
            let sum = 0;
            v.filter((r:Record) => r.type === 0).forEach((r:Record) => sum += parseInt(r.volume));
            return sum;
        });
        this.load();
    }

    addRecord(record) {
        this._historyService
            .create(record)
            .subscribe(() => {
                this.record = new Record({comment: '', volume: ''});
            });
    }

    deleteRecord(record) {
        this._historyService.deleteRecord(record);
    }

    // TODO
    load(fromDate?) {
        this._historyService.load({createdAt: fromDate});
    }
}
