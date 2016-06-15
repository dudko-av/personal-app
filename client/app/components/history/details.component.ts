import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import 'rxjs/Rx';

import {HistoryService, Record} from './history.service';
import {SocketService} from "../../socket.service";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'details-component',
    template: `
        <form *ngIf="record">
            <div>
                <input [(ngModel)]="record.comment">
            </div>
            <div>
                <input [(ngModel)]="record.volume">
            </div>
        </form>
    `
})
export class DetailsComponent {
    constructor() {

    }
}
