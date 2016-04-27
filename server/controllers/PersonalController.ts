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
        this.actions.push('options');
    }

    incomeAction(req:express.Request, res:express.Response) {
        res.send('income action test');
    }

    createAction(req:express.Request, res:express.Response) {
        if (!this.authorized(req, res)) return;
        req.body.createdBy = req.user;
        (new PersonalModel(req.body)).save((err, model) => {
            this._io.emit('NEW_RECORD', model);
            res.send(err || model);
        });
    }

    historyAction(req:express.Request, res:express.Response) {
        if (!this.authorized(req, res)) return;
        let filter = {};
        filter['createdBy'] = req.user._id;
        if (req.body.createdAt) {
            filter['createdAt'] = {$gt: new Date(req.body.createdAt)};
        }
        PersonalModel.find(filter, null, {sort: {'createdAt': 'desc'}}, function (err, list) {
            res.send(list);
        });
    }

    optionsAction(req:express.Request, res:express.Response) {
        if (!this.authorized(req, res)) return;
        PersonalModel.find({createdBy: req.user._id}).distinct('comment', (err, list) => {
            res.send(list);
        });
    }

    private authorized(req, res) {
        if (!req.user) res.sendStatus(401);
        return req.user ? true : false;
    }
}
