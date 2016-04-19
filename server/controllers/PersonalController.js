/// <reference path="../../typings/express/express.d.ts" />
"use strict";
var PersonalController = (function () {
    function PersonalController() {
        this.actions = [];
        this.actions.push('income');
    }
    PersonalController.prototype.incomeAction = function (req, res) {
        res.send('income action test');
    };
    return PersonalController;
}());
exports.PersonalController = PersonalController;
//# sourceMappingURL=PersonalController.js.map