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
import * as passport from 'passport';
import {UserModel} from "../models/UserModel";
import {FacebookStrategy} from './strategies/facebook';

export class Passport {
    static origin = passport;
    constructor() {
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function (id, done) {
            UserModel.findById(id, function (err, user) {
                done(null, user);
            });
        });
        
        new FacebookStrategy();
    }
}
