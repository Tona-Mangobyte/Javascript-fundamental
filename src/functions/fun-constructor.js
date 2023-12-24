// The Function() Constructor
const myFunction = new Function("a", "b", "return a * b");

console.log(myFunction(4, 3))

// anonymous function
const myFunction2 = function (a, b) {return a * b};
console.log(myFunction2(4, 3))