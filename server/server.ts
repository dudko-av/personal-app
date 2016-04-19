/// <reference path="../typings/express/express.d.ts" />

import * as express from 'express';
import * as fs from 'fs';

var app = express();

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

app.use(express.static('client'));

app.listen(3333, function () {
    console.log('Server listening on port 3333.');
});
