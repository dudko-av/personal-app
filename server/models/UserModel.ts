import * as mongoose from 'mongoose';

var _schema = new mongoose.Schema({
    displayName: String,
    provider: String,
    providerId: String,
});

export var UserModel = mongoose.model('user', _schema);
