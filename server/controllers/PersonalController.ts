/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';

import {PersonalModel} from '../models/PersonalModel';

export class PersonalController {
    actions = [];

    constructor() {
        this.actions.push('income');
        this.actions.push('create');
        this.actions.push('history');
    }

    incomeAction(req:express.Request, res:express.Response) {
        res.send('income action test');
    }

    createAction(req:express.Request, res:express.Response) {
        (new PersonalModel(req.body)).save(function (err, model) {
            res.send(err || model);
        });
    }

    historyAction(req:express.Request, res:express.Response) {
        PersonalModel.find(null, null, {sort: {'createdAt': 'desc'}}, function (err, list) {
            res.send(list);
        });
    }
}
