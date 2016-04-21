//module.exports = require('./env/' + process.env.NODE_ENV);
"use strict";
var development_1 = require('./env/development');
var production_1 = require('./env/production');
function _getConfig() {
    switch (process.env.NODE_ENV) {
        case 'development': return development_1.development;
        case 'production': return production_1.production;
    }
}
exports.config = _getConfig();
//# sourceMappingURL=config.js.map