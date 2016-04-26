"use strict";
var mongoose = require('mongoose');
var _schema = new mongoose.Schema({
    displayName: String,
    provider: String,
    providerId: String,
});
exports.UserModel = mongoose.model('user', _schema);
//# sourceMappingURL=UserModel.js.map