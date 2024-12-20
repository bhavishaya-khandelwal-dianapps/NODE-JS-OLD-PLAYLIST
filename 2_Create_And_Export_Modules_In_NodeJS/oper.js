
const name = "Bhavishaya Khandelwal";

const add = (a, b) => {
    return (a + b);
}

const sub = (a, b) => {
    return (a - b);
}






//? Method 1 -> For exporting multiple functions, variables 
// module.exports.sub = sub;
// module.exports.add = add;
// module.exports.name = name;




//? Method 2 -> For Exporting multiple functions, variables 
module.exports = { add, sub, name };