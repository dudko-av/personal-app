/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/tsd.d.ts' />
/// <reference path="../typings/express/express.d.ts" />

import * as express from 'express';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as socket from 'socket.io';

import {config} from './config/config';
import {DB} from './config/mongoose';

var app = express();
var server = http.Server(app);
var io = socket(server);

var db = new DB();
// configure app
app.use(express.static('client'));
app.use(bodyParser.json());

// load controllers
fs.readdirSync('server/controllers')
    .filter(f => !!f.match(/\.js$/))
    .forEach(name => {
        var ctrlName = name.match(/([\w]*)Controller/)[1].toLowerCase();
        var ctrl = require('./controllers/' + name)[name.split('.')[0]];
        ctrl = new ctrl(io);
        ctrl.actions.forEach(a => {
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

server.listen(config.port, config.ip, function () {
    console.log('Server running at ' + config.port);
});
