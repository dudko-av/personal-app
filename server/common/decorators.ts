export function POST(path:string) {
    return function (target, methodString:string, descriptor) {
        target[methodString].call(target, 'test', path);
    }
}

//======================================================================================================================
export interface IAction {
    authorized?: boolean
}

export function ACTION(config:IAction) {
    return function (target, methodString:string, descriptor:PropertyDescriptor) {
    //     let method = descriptor.value;
    //     //target[methodString].apply(target, arguments);
    //     return method.apply(this, arguments);
        return {
            value: function (...args: any[]) {
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
    }
}
