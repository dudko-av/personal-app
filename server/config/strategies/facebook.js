"use strict";
// var passport = require('passport'),
//     FacebookStrategy = require('passport-facebook').Strategy,
//     config = require('../config').facebook;
//
// module.exports = function () {
//     passport.use(new FacebookStrategy(config, function (accessToken, refreshToken, profile, done) {
//             var User = require('mongoose').model('User');
//             User.find({provider: 'facebook', providerId: profile.id}, function (err, user) {
//                 if (user.length) {
//                     done(null, user[0]);
//                 } else {
//                     var newUser = new User({
//                         displayName: profile.displayName,
//                         provider: profile.provider,
//                         providerId: profile.id
//                     });
//                     newUser.save(function () {
//                         done(null, newUser);
//                     });
//                 }
//             });
//         }
//     ));
// };
var passport = require('passport');
var facebook = require('passport-facebook');
var config_1 = require('../config');
var UserModel_1 = require('../../models/UserModel');
var FacebookStrategy = (function () {
    function FacebookStrategy() {
        passport.use(new facebook.Strategy(config_1.config.facebook, function (accessToken, refreshToken, profile, done) {
            UserModel_1.UserModel.find({ provider: 'facebook', providerId: profile.id }, function (err, user) {
                if (user.length) {
                    done(null, user[0]);
                }
                else {
                    var newUser = new UserModel_1.UserModel({
                        displayName: profile.displayName,
                        provider: profile.provider,
                        providerId: profile.id
                    });
                    newUser.save(function () {
                        done(null, newUser);
                    });
                }
            });
        }));
    }
    return FacebookStrategy;
}());
exports.FacebookStrategy = FacebookStrategy;
//# sourceMappingURL=facebook.js.map