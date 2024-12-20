const fs = require("fs");
const path = require("path");


const bioData = {
    name : "Bhavishaya Khandelwal", 
    age : 22, 
    channelName : "The Acoustic Future", 
};




//todo --- Task :- 
//! 1. Convert to JSON 
//! 2. Add that data into another file
//! 3. Read that file 
//! 4. Convert back to object
//! 5. Show it in console




//? Solution :- 
//* Step 1 : Convert the given object into JSON format 
const jsonData = JSON.stringify(bioData);


//* Step 2 : Create a new file + Add the data into that file
const fileName = "jsonData.json";
const filePath = path.join(__dirname, fileName);

const createANewFile = async () => {
    try {
        await fs.promises.writeFile(filePath, jsonData, "utf-8", (err) => {
            console.log("A new file is created");
        });
    }
    catch(error) {
        console.log(error);
    }
}


// createANewFile();




//* Step 3 : Read the data of that file 
const readTheData = async () => {
    try {
        await fs.readFile(filePath, "utf-8", (err, data) => {
            console.log(data);
        })
    }
    catch(error) {
        console.log(error);
    }
}

console.log("This is a JSON data");
readTheData();




//* Step 4 : Convert back to object 
const newObj = JSON.parse(jsonData);




//* Step 5 : Show it in console
console.log("\nThis is object data");
console.log(newObj);