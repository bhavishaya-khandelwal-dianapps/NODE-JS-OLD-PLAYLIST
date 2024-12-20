//? To export a single function 
// const add = require("./oper.js");
// const name = require("./oper.js");
// const sub = require("./oper.js");




//? Method-1 To export multiple functions, variables, etc.
// const math = require("./oper.js");

// console.log(math.sub(10, 2));
// console.log(math.name);
// console.log(math.add(13, 1));






//? Method-2 To Export multiple functions, variables, etc.
const { name, add, sub } = require("./oper.js");

console.log(add(2, 32));
console.log(sub(32, 2));
console.log(name);