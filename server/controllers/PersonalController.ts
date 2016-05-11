/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';

import {PersonalModel} from '../models/PersonalModel';
import {ACTION} from '../common/decorators';

export class PersonalController {
    private _io;

    constructor(io) {
        this._io = io;
    }

    @ACTION({authorized: true})
    createAction(req:express.Request, res:express.Response) {
        req.body.createdBy = req.user;
        (new PersonalModel(req.body)).save((err, model) => {
            this._io.emit('NEW_RECORD', model);
            res.send(err || model);
        });
    }

    @ACTION({authorized: true})
    historyAction(req:express.Request, res:express.Response) {
        let filter = {};
        filter['createdBy'] = req.user._id;
        if (req.body.createdAt) {
            filter['createdAt'] = {$gt: new Date(req.body.createdAt)};
        }
        PersonalModel.find(filter, null, {sort: {'createdAt': 'desc'}}, function (err, list) {
            res.send(list);
        });
    }

    @ACTION({authorized: true})
    optionsAction(req:express.Request, res:express.Response) {
        PersonalModel.find({createdBy: req.user._id}).distinct('comment', (err, list) => {
            res.send(list);
        });
    }

    @ACTION({authorized: true})
    deleteAction(req:express.Request, res:express.Response) {
        PersonalModel.findByIdAndRemove(req.body.id, (err, result) => {
            res.send({_id: result.id});
        });
    }
}
