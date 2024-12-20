const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("../0.1_CONTROLLERS/sendMail.js");


app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/sendemail", () => {
    sendMail;
});


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`I am live in port number ${PORT}`);
        });
    }
    catch(error) {
        console.log(error);
    }
}

start();