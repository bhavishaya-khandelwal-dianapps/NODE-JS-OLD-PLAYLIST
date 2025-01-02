const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;


let staticPath = path.join(__dirname, "../public");


//* To set the view engine  
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

//* Template engine route 
app.get("", (req, res) => {
    res.render('index', {
        someDynamicData : "Bhavishaya",
    });
});

app.get("/", (req, res) => {
    res.send("Hello from the express server");
});



app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});