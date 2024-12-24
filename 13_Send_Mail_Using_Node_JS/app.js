const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("../0.1_CONTROLLERS/sendMail.js");

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`I am live in port no. ${PORT}`);
        });
    }
    catch(err) {
        console.log(err);
    }
};


start();