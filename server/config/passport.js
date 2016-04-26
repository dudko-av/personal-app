"use strict";
// var passport = require('passport'),
//     mongoose = require('mongoose');
//
// module.exports = function () {
//     var User = mongoose.model('User');
//
//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });
//
//     passport.deserializeUser(function (id, done) {
//         var User = require('mongoose').model('User');
//         User.find({'_id': id}, function (err, user) {
//             done(null, user[0]);
//         });
//     });
//
//     require('./strategies/facebook')();
//     require('./strategies/twitter')();
//
//     return passport;
// };
var passport = require('passport');
var UserModel_1 = require("../models/UserModel");
var facebook_1 = require('./strategies/facebook');
var Passport = (function () {
    function Passport() {
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });
        passport.deserializeUser(function (id, done) {
            UserModel_1.UserModel.findById(id, function (err, user) {
                done(null, user);
            });
        });
        new facebook_1.FacebookStrategy();
    }
    Passport.origin = passport;
    return Passport;
}());
exports.Passport = Passport;
//# sourceMappingURL=passport.js.map