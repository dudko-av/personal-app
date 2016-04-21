/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';

import {PersonalModel} from '../models/PersonalModel';

export class PersonalController {
    actions = [];
    private _io;

    constructor(io) {
        this._io = io;

        this.actions.push('income');
        this.actions.push('create');
        this.actions.push('history');
    }

    incomeAction(req:express.Request, res:express.Response) {
        res.send('income action test');
    }

    createAction(req:express.Request, res:express.Response) {
        (new PersonalModel(req.body)).save((err, model) => {
            this._io.emit('NEW_RECORD', model);
            res.send(err || model);
        });
    }

    historyAction(req:express.Request, res:express.Response) {
        PersonalModel.find(null, null, {sort: {'createdAt': 'desc'}}, function (err, list) {
            res.send(list);
        });
    }
}
