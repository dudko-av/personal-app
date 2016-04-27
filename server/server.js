/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/tsd.d.ts' />
/// <reference path="../typings/express/express.d.ts" />
"use strict";
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');
var socket = require('socket.io');
var session = require('express-session');
var config_1 = require('./config/config');
var mongoose_1 = require('./config/mongoose');
var passport_1 = require('./config/passport');
var app = express();
var server = http.Server(app);
var io = socket(server);
var passport = new passport_1.Passport();
var db = new mongoose_1.DB();
// configure app
app.use(express.static('client'));
app.use('/@angular2-material', function (req, res, next) {
    res.sendfile('./client/node_modules' + req.originalUrl);
});
app.use('/material-design-lite', function (req, res, next) {
    res.sendfile('./client/material-design-lite' + req.originalUrl);
});
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport_1.Passport.origin.initialize());
app.use(passport_1.Passport.origin.session());
// load controllers
fs.readdirSync('server/controllers')
    .filter(function (f) { return !!f.match(/\.js$/); })
    .forEach(function (name) {
    var ctrlName = name.match(/([\w]*)Controller/)[1].toLowerCase();
    var ctrl = require('./controllers/' + name)[name.split('.')[0]];
    ctrl = new ctrl(io);
    ctrl.actions.forEach(function (a) {
        app.use('/' + ctrlName + '/' + a, function (req, res, next) {
            ctrl[a + 'Action'](req, res, next);
        });
    });
});
// not found
app.use(function (req, res, next) {
    res.sendfile('./client/index.html');
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