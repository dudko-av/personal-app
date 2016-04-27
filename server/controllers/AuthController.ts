import * as passport from 'passport';

export class AuthController {
    actions;
    constructor() {
        this.actions = [
            'facebook',
            'facebookcallback',
            'user'
        ];
    }

    facebookAction(req, res, next) {
        passport.authenticate('facebook', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });
        })(req, res, next);
    }

    facebookcallbackAction(req, res, next) {
        passport.authenticate('facebook', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });
        })(req, res, next);
    }

    userAction(req, res) {
        res.send(req.user);
    }
}
