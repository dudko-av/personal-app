///<reference path="../../typings/mongoose/mongoose.d.ts" />

import * as mongoose from 'mongoose';

export interface IPersonal extends mongoose.Document {
    createdAt?:Date,
    type?:number,
    volume?:number,
    comment?:string
}

var _schema = new mongoose.Schema({
    createdAt: {type: Date, 'default': Date.now},
    type: {type: Number, 'default': 0},
    volume: {type: Number, 'default': 0},
    comment: {type: String, 'default': ''}
});

_schema.pre('save', function (next) {
    this.volume = parseFloat(this.volume) || 0;
    next();
});

export var PersonalModel = mongoose.model('personal', _schema);
