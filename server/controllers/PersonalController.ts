/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';

export class PersonalController {
    actions = [];
    constructor() {
        this.actions.push('income');
    }
    incomeAction(req : express.Request, res : express.Response) {
        res.send('income action test');
    }
}
