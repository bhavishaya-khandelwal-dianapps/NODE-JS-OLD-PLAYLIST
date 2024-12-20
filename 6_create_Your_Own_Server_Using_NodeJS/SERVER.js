//*=================================================
//* Node.js Web Server :- 
//*==========================================
//? To access web pages of any application, you need a web server. The web server will handle all the http requests for the web application. 

//? e.g. IIS is web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications. 

//? Node.JS provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server. 

//todo --- WEB SERVER : A web server is a software program which serves web pages to web users (browsers).
//* So we can say that we want a WEB SERVER to access any WEB PAGE on the browser. 
//* Or we can say that it is used to handle HTTP request.





//* Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//? To include the HTTP module, use the require() method:

const http = require("http");



//* The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
//? Use the createServer() method to create an HTTP server:
const server = http.createServer((req, res) => {
    // req.write("Hello World");  //* Write a response to the client
    res.end("Hello from the other sides"); //* End the response 
});


const PORT = 8000;
server.listen(PORT, () => {
    console.log("Listening to the port number 8000");
});