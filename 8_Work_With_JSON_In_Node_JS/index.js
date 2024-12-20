import chalk from "chalk";



const bioData = {
    name : "Bhavishaya Khandelwal", 
    age : 22, 
    channelName : "The Acoustic Future", 
};




//* To convert any object into JSON format 
const jsonData = JSON.stringify(bioData);
console.log(chalk.yellow.bgGreen.bold.inverse(jsonData) + "\n");




//* To convert JSON data into object Data
const objData = JSON.parse(jsonData);
console.log(objData);




