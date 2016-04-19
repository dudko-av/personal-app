/// <reference path="../typings/express/express.d.ts" />
"use strict";
var express = require('express');
var fs = require('fs');
var app = express();
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
app.use(express.static('client'));
app.listen(3333, function () {
    console.log('Server listening on port 3333.');
});
//# sourceMappingURL=server.js.map