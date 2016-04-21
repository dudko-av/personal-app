/// <reference path='../typings/tsd.d.ts' />
/// <reference path="../typings/express/express.d.ts" />
"use strict";
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var config_1 = require('./config/config');
var mongoose_1 = require('./config/mongoose');
var app = express();
var db = new mongoose_1.DB();
// configure app
app.use(express.static('client'));
app.use(bodyParser.json());
// load controllers
fs.readdirSync('server/controllers')
    .filter(function (f) { return !!f.match(/\.js$/); })
    .forEach(function (name) {
    var ctrlName = name.match(/([\w]*)Controller/)[1].toLowerCase();
    var ctrl = new (require('./controllers/' + name)[name.split('.')[0]]);
    ctrl.actions.forEach(function (a) {
        app.use('/' + ctrlName + '/' + a, ctrl[a + 'Action']);
    });
});
app.listen(config_1.config.ip, config_1.config.port, function () {
    console.log('Server listening on port ' + config_1.config.port);
});
//# sourceMappingURL=server.js.map