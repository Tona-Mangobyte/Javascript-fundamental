// ES5
function sum(val1, val2) {
    console.log(`arguments: `, arguments);
    return val1 + val2;
}
console.log(sum(2,5));

//[ES6] Arrow Functions
const sum2 = (val1, val2) => {
    return val1 + val2;
}
console.log(sum2(2,5));
setTimeout()