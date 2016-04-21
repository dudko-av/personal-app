export function POST(path:string) {
    return function (target, methodString:string, descriptor) {
        target[methodString].call(target, 'test', path);
    }
}
