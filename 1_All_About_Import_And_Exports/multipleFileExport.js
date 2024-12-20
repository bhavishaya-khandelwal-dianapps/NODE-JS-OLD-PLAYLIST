//! Method - 1 For exporting multiple functions
// module.exports.add = (a, b) => {
//     return a + b;
// }


// module.exports.sub = (a, b) => {
//     return a - b;
// }



// module.exports.mul = (a, b) => {
//     return a * b;
// }






//! Method - 2 For exporting multiple functions 
const add = (a, b) => {
    return (a + b);
}

const sub = (a, b) => {
    return (a - b);
}

const mul = (a, b) => {
    return (a * b);
}

module.exports = { add, sub, mul };