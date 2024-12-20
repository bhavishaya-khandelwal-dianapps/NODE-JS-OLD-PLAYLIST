console.log("THis is our main application");

const greetings = require("./greetings.js");

greetings.sayHello();



//? Exporting single file 
const random = require("./random.js");

console.log(random("Bhavishaya"));



//? Export multiple file 
// const math = require("./multipleFileExport.js");

// console.log(math.add(32, 32));
// console.log(math.sub(10, 5));
// console.log(math.mul(40, 2));




const { add, sub, mul } = require("./multipleFileExport.js");
console.log(add(3, 3));
console.log(sub(3, 2));
console.log(mul(4, 5));





