import chalk from "chalk";






//* Behind the scene our code looks like this 
//? This is a Module Wrapper Function 
(function(exports, require, module, __filename, __dirname) {
    
    //* This simple code wraps inside this ModuleWrapperFunction 
    const name = "Bhavishaya Khandelwal";
    console.log(chalk.yellow.bold.underline.inverse(name));
    //? Module code actually lives in here 

}); 
//? This outer parenthesis is a grouping operator
//* Basically node binds all our code that we write inside this Module Wrapper Function 











//* IIFE (Immediately Invoked Function Expression) :- 
//? This function automatically invoked 
//todo --- IMP. NOTE :- All tha variables which we define even using var keyword inside IIFE, then we are not able to access these variables outside this function, because it makes them PRIVATE.
(function() {
    var x = 10;
    console.log(chalk.yellow.bgBlue.bold.inverse(`Automatically invoked, x = ${x}`));
})();


// console.log(x); //todo --- OUTPUT : x is not defined






function getData() {
    var a = 10;
    console.log(a);
}

getData();

console.log(a);   //todo --- OUTPUT : x is not defined 