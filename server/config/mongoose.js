"use strict";
// var config = require('./config'),
//     mongoose = require('mongoose'),
//     fs = require('fs');
//
// module.exports = function () {
//     var db = mongoose.connect(config.db);
//     fs.readdirSync('./server/models').forEach(function (file) {
//         require('../models/' + file);
//     });
//     return db;
// };
var config_1 = require('./config');
var mongoose = require('mongoose');
var DB = (function () {
    function DB() {
        this.connection = mongoose.connect(config_1.config.db);
    }
    DB.prototype.getConnection = function () {
        return this.connection;
    };
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=mongoose.js.map