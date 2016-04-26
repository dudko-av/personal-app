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
import * as passport from 'passport';
import * as facebook from  'passport-facebook';
import {config} from '../config';
import {UserModel} from '../../models/UserModel';

export class FacebookStrategy {
    constructor() {
        passport.use(new facebook.Strategy(config.facebook, function (accessToken, refreshToken, profile, done) {
            UserModel.find({provider: 'facebook', providerId: profile.id}, function (err, user) {
                    if (user.length) {
                        done(null, user[0]);
                    } else {
                        var newUser = new UserModel({
                            displayName: profile.displayName,
                            provider: profile.provider,
                            providerId: profile.id
                        });
                        newUser.save(function () {
                            done(null, newUser);
                        });
                    }
                });
            }
        ));
    }
}
