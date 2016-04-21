//module.exports = require('./env/' + process.env.NODE_ENV);

import {development} from './env/development';
import {production} from './env/production';

function _getConfig() {
    switch (process.env.NODE_ENV) {
        case 'development': return development;
        case 'production': return production;
    }
}

export var config = _getConfig();
