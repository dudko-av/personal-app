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
import {config} from './config';
import * as mongoose from 'mongoose';

export class DB {
    connection;

    constructor() {
        this.connection = mongoose.connect(config.db);
    }

    getConnection() {
        return this.connection;
    }
}
