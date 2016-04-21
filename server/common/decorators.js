"use strict";
function POST(path) {
    return function (target, methodString, descriptor) {
        target[methodString].call(target, 'test', path);
    };
}
exports.POST = POST;
//# sourceMappingURL=decorators.js.map