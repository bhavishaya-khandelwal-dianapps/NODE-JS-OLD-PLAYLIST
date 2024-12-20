const http =require("http");
const url = require("url");


const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == "/") {
        res.end("The Acoustic Future");
    }
    else if(req.url == "/about") {
        res.end("This is out about page");
    }
    else if(req.url == "/service") {
        res.end("THis is our service page");
    }
    else if(req.url == "/contact") {
        res.write("Hello from contact page");
        res.end();
    }
    else {
        res.writeHead(404, { "content-type" : "text/html" });
        res.end(" <h1> 404 Error page - page does not exist </h1> ");
    }
});


server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port no. 8000");
});