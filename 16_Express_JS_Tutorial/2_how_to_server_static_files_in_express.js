const express = require("express");
const app = express();
const path = require("path");


const PORT = 5000;

console.log(__dirname);

let staticPath = path.join(__dirname, "../public");


//* Built-in middleware 
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("Hello from server");
});


app.listen(PORT, () => {
    console.log("Listening to port number", PORT);
});