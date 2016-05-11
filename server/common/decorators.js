"use strict";
function POST(path) {
    return function (target, methodString, descriptor) {
        target[methodString].call(target, 'test', path);
    };
}
exports.POST = POST;
function ACTION(config) {
    return function (target, methodString, descriptor) {
        //     let method = descriptor.value;
        //     //target[methodString].apply(target, arguments);
        //     return method.apply(this, arguments);
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                //var a = args.map(a => JSON.stringify(a)).join();
                var req = args[0];
                var res = args[1];
                if (config.authorized && !req.user) {
                    res.sendStatus(401);
                    return null;
                }
                var result = descriptor.value.apply(this, args);
                //var r = JSON.stringify(result);
                //console.log(`Call: ${key}(${a}) => ${r}`);
                return result;
            }
        };
    };
}
exports.ACTION = ACTION;
//# sourceMappingURL=decorators.js.map