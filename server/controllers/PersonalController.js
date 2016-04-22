/// <reference path="../../typings/express/express.d.ts" />
"use strict";
var PersonalModel_1 = require('../models/PersonalModel');
var PersonalController = (function () {
    function PersonalController(io) {
        this.actions = [];
        this._io = io;
        this.actions.push('income');
        this.actions.push('create');
        this.actions.push('history');
        this.actions.push('options');
    }
    PersonalController.prototype.incomeAction = function (req, res) {
        res.send('income action test');
    };
    PersonalController.prototype.createAction = function (req, res) {
        var _this = this;
        (new PersonalModel_1.PersonalModel(req.body)).save(function (err, model) {
            _this._io.emit('NEW_RECORD', model);
            res.send(err || model);
        });
    };
    PersonalController.prototype.historyAction = function (req, res) {
        PersonalModel_1.PersonalModel.find(null, null, { sort: { 'createdAt': 'desc' } }, function (err, list) {
            res.send(list);
        });
    };
    PersonalController.prototype.optionsAction = function (req, res) {
        PersonalModel_1.PersonalModel.find(null).distinct('comment', function (err, list) {
            res.send(list);
        });
    };
    return PersonalController;
}());
exports.PersonalController = PersonalController;
//# sourceMappingURL=PersonalController.js.map