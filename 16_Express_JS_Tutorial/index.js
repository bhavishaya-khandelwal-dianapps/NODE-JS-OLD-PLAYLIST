const express = require("express");
const app = express();

const PORT = 8080;


app.get("/", (req, res) => {
    res.write("<h1>Home Page</h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

app.get("/contact", (req, res) => {
    res.json([{
        id : 1, 
        name : "Bhavishaya Khandelwal",
    }]);
});


app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});