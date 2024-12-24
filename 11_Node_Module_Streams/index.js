//*======================================
//* Node JS Streams :- 
//*======================================
//? Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js there are 4 types of streams :- 

//? Streaming means listening to music or watching video in `real time`, instead of downloading a file to your computer and watching it later. 

//! Readable - 
//? Stream which is used for read opeartion. 

//! Writable - 
//? Stream which is used to write opeartion. 

//! Duplex - 
//? Stream which is used for both read and write opeartion. 

//! Transform - 
//? A type of duplex stream where the output is computed based on input.



//* Event type of Stream is an EventEmitter instance and throws several events at different instance of times. For eaxmple, some of the commonly used events are - 

//! data - 
//? This event is fired when the data is available to read. 

//! end -
//? This event is fired when there is no more data to read. 

//! error -
//? This event is fired when there is any error receiving or writing data. 

//! finish -
//? This event is fired when all the data has been flushed to underlying system.




const fs = require("fs");
const http = require("http");
const EventEmitter = require("events");
const emit = new EventEmitter();



const server = http.createServer();



//* THis is the normal way -> 
// server.on('request', (req, res) => {
//     fs.readFile("input.txt", function(err, data) {
//         if(err) console.log(err);
//         console.log(data.toString());
//         res.end(data.toString());
//     });
// });


//* Let's checkout streaming way ->
server.on('request', (req, res) => {
    const rstream = fs.createReadStream('input.txt');
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });
    
    rstream.on('end', () => {
        res.end();
    });
    
    rstream.on('error', (err) => {
        console.log(err);
        res.end("File Not Found");
    })
});


server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port number 8000");
});