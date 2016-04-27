"use strict";
var passport = require('passport');
var AuthController = (function () {
    function AuthController() {
        this.actions = [
            'facebook',
            'facebookcallback',
            'user'
        ];
    }
    AuthController.prototype.facebookAction = function (req, res, next) {
        passport.authenticate('facebook', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    };
    AuthController.prototype.facebookcallbackAction = function (req, res, next) {
        passport.authenticate('facebook', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/');
            });
        })(req, res, next);
    };
    AuthController.prototype.userAction = function (req, res) {
        res.send(req.user);
    };
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map