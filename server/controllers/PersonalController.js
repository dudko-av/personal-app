/// <reference path="../../typings/express/express.d.ts" />
"use strict";
var PersonalModel_1 = require('../models/PersonalModel');
var PersonalController = (function () {
    function PersonalController() {
        this.actions = [];
        this.actions.push('income');
        this.actions.push('create');
        this.actions.push('history');
    }
    PersonalController.prototype.incomeAction = function (req, res) {
        res.send('income action test');
    };
    PersonalController.prototype.createAction = function (req, res) {
        (new PersonalModel_1.PersonalModel(req.body)).save(function (err, model) {
            res.send(err || model);
        });
    };
    PersonalController.prototype.historyAction = function (req, res) {
        PersonalModel_1.PersonalModel.find(null, null, { sort: { 'createdAt': 'desc' } }, function (err, list) {
            res.send(list);
        });
    };
    return PersonalController;
}());
exports.PersonalController = PersonalController;
//# sourceMappingURL=PersonalController.js.map