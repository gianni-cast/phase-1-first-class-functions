function receivesAFunction (callback) {
    callback();
}
 
function add (a, b) {
    return a + b
}

function returnsANamedFunction () {
    let namedFunction = add;
    return namedFunction
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log('I am anonymous')
    }
}