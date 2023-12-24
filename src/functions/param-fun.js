// anonymous function
function simpleFun(fun, process) {
    return process(fun());
}
const fun = function () { return 4;}
const process = function (param) { return 6 * param;}
console.log(simpleFun(fun, process));