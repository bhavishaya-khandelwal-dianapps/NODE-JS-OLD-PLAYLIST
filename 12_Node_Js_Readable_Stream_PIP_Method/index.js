//! stream.pipe() :
//? stream.pipe(), the method used to take a readable stream and connect it to a writable stream.


const fs = require("fs");
const http = require("http");
const EventEmitter = require("events");
const emit = new EventEmitter();


const server = http.createServer();

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt");

    //* Method - 2
    // rstream.on('data', (chunkdata) => {
    //     res.writable(chunkdata);
    // });

    // rstream.on('end', () => {
    //     res.end();
    // });

    // rstream.on('error', (err) => {
    //     console.log(err);
    //     res.end("File Not Found");
    // });



    //* Method - 3
    rstream.pipe(res);
});


server.listen(8000, "127.0.0.1");