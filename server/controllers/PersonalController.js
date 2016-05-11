/// <reference path="../../typings/express/express.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var express = require('express');
var PersonalModel_1 = require('../models/PersonalModel');
var decorators_1 = require('../common/decorators');
var PersonalController = (function () {
    function PersonalController(io) {
        this._io = io;
    }
    PersonalController.prototype.createAction = function (req, res) {
        var _this = this;
        req.body.createdBy = req.user;
        (new PersonalModel_1.PersonalModel(req.body)).save(function (err, model) {
            _this._io.emit('NEW_RECORD', model);
            res.send(err || model);
        });
    };
    PersonalController.prototype.historyAction = function (req, res) {
        var filter = {};
        filter['createdBy'] = req.user._id;
        if (req.body.createdAt) {
            filter['createdAt'] = { $gt: new Date(req.body.createdAt) };
        }
        PersonalModel_1.PersonalModel.find(filter, null, { sort: { 'createdAt': 'desc' } }, function (err, list) {
            res.send(list);
        });
    };
    PersonalController.prototype.optionsAction = function (req, res) {
        PersonalModel_1.PersonalModel.find({ createdBy: req.user._id }).distinct('comment', function (err, list) {
            res.send(list);
        });
    };
    PersonalController.prototype.deleteAction = function (req, res) {
        PersonalModel_1.PersonalModel.findByIdAndRemove(req.body.id, function (err, result) {
            res.send({ _id: result.id });
        });
    };
    __decorate([
        decorators_1.ACTION({ authorized: true }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], PersonalController.prototype, "createAction", null);
    __decorate([
        decorators_1.ACTION({ authorized: true }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], PersonalController.prototype, "historyAction", null);
    __decorate([
        decorators_1.ACTION({ authorized: true }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], PersonalController.prototype, "optionsAction", null);
    __decorate([
        decorators_1.ACTION({ authorized: true }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], PersonalController.prototype, "deleteAction", null);
    return PersonalController;
}());
exports.PersonalController = PersonalController;
//# sourceMappingURL=PersonalController.js.map