/// <reference path='../typings/tsd.d.ts' />
/// <reference path="../typings/express/express.d.ts" />

import * as express from 'express';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';

import {config} from './config/config';
import {DB} from './config/mongoose';

var app = express();
var db = new DB();

// configure app
app.use(express.static('client'));
app.use(bodyParser.json());

// load controllers
fs.readdirSync('server/controllers')
    .filter(f => !!f.match(/\.js$/))
    .forEach(name => {
        var ctrlName = name.match(/([\w]*)Controller/)[1].toLowerCase();
        var ctrl = new (require('./controllers/' + name)[name.split('.')[0]]);
        ctrl.actions.forEach(a => {
            app.use('/' + ctrlName + '/' + a, ctrl[a + 'Action']);
        });
    });

app.listen(config.ip, config.port, function () {
    console.log('Server listening on port ' + config.port);
});
