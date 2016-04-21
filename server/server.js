/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/tsd.d.ts' />
/// <reference path="../typings/express/express.d.ts" />
"use strict";
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');
var socket = require('socket.io');
var config_1 = require('./config/config');
var mongoose_1 = require('./config/mongoose');
var app = express();
var server = http.Server(app);
var io = socket(server);
var db = new mongoose_1.DB();
// configure app
app.use(express.static('client'));
app.use(bodyParser.json());
// load controllers
fs.readdirSync('server/controllers')
    .filter(function (f) { return !!f.match(/\.js$/); })
    .forEach(function (name) {
    var ctrlName = name.match(/([\w]*)Controller/)[1].toLowerCase();
    var ctrl = require('./controllers/' + name)[name.split('.')[0]];
    ctrl = new ctrl(io);
    ctrl.actions.forEach(function (a) {
        app.use('/' + ctrlName + '/' + a, function (req, res) {
            ctrl[a + 'Action'](req, res);
        });
    });
});
// logs
io.on('connection', function (client) {
    console.log('new socket io connection');
    console.log('connection id ', client.id);
});
server.listen(config_1.config.port, config_1.config.ip, function () {
    console.log('Server running at ' + config_1.config.port);
});
//# sourceMappingURL=server.js.map