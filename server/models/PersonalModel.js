///<reference path="../../typings/mongoose/mongoose.d.ts" />
"use strict";
var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
var _schema = new mongoose_1.Schema({
    createdAt: { type: Date, 'default': Date.now },
    createdBy: { 'type': mongoose_1.Schema.Types.ObjectId, ref: 'user' },
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