///<reference path="../../typings/mongoose/mongoose.d.ts" />

import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

export interface IPersonal extends mongoose.Document {
    createdAt?:Date,
    type?:number,
    volume?:number,
    comment?:string
}

var _schema = new Schema({
    createdAt: {type: Date, 'default': Date.now},
    createdBy:  {'type': Schema.Types.ObjectId, ref: 'user'},
    type: {type: Number, 'default': 0},
    volume: {type: Number, 'default': 0},
    comment: {type: String, 'default': ''}
});

_schema.pre('save', function (next) {
    this.volume = parseFloat(this.volume) || 0;
    next();
});

export var PersonalModel = mongoose.model('personal', _schema);
