export var development = {
    ip: 'localhost',
    port: 3334,
    db: 'mongodb://localhost/personal_app',
    sessionSecret: 'devSessionSecret',
    facebook: {
        clientID: '1685748595015872',
        clientSecret: '814621629100fd4ac9f2ca1ed54e1fad',
        callbackURL: 'http://localhost:3334/auth/facebookcallback'
    },
    twitter: {
        consumerKey: 'sKrTcP9bMAINWGBWUAsGLCmcL',
        consumerSecret: '2CyWwR7zP2Xt15eKuXAo2wUWZrwOOLEfyKKFcfhPgIuxRcsmOK',
        callbackURL: 'http://' + process.env.OPENSHIFT_APP_DNS + '/auth/twitter/callback'
    }
};
