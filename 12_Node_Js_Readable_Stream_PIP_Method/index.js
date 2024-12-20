//! stream.pipe() :
//? stream.pipe(), the method used to take a readable stream and connect it to a writable stream.

const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");
const event = new EventEmitter();


const server = http.createServer();

server.on("request", (req, res) => {

    //todo -- Show using streams 

    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData);
    // });

    // rstream.on("end", () => {
    //     res.end();
    // });

    // rstream.on("error", () => {
    //     console.log(error);
    //     res.end("File not found");
    // });


    //todo --- 3rd Way 
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    
});


server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port number 8000");
});