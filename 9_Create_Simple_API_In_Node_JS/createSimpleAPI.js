//* API(Application Programming Interface) : API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the whether on your phone, you're using an API. 
//? API is a service which allows us to request a data. 


const http = require("http");
const url = require("url");
const fs = require("fs");
const filePath = "../0_USER_API/userApi.json"; 


const server = http.createServer((req, res) => {

    const data = fs.readFileSync("../0_USER_API/userApi.json", "utf-8");
    const objData = JSON.parse(data);

    if(req.url == "/") {
        res.end("Home Page");
    }
    else if(req.url == "/about") {
        res.end("About Page Goes From Here");
    }
    else if(req.url == "/contact") {
        res.end("Contact Page Goes From Here");
    }
    else if(req.url == "/userapi") {
        res.writeHead(200, { "content-type" : "application/json" });
        res.end(data);
        // res.end(objData[0].name);
    }
    else {
        res.writeHead(404, { "content-type" : "text/html" });
        res.end("<h1>404 Error page</h1>");
    }
});

server.listen(5000, "127.0.0.1", () => {
    console.log("Listening to the port number 5000");
});