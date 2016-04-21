///<reference path="../../typings/mongoose/mongoose.d.ts" />
"use strict";
var mongoose = require('mongoose');
var _schema = new mongoose.Schema({
    createdAt: { type: Date, 'default': Date.now },
    type: { type: Number, 'default': 0 },
    volume: { type: Number, 'default': 0 },
    comment: { type: String, 'default': '' }
});
_schema.pre('save', function (next) {
    this.volume = parseFloat(this.volume) || 0;
    next();
});
exports.PersonalModel = mongoose.model('personal', _schema);
//# sourceMappingURL=PersonalModel.js.map