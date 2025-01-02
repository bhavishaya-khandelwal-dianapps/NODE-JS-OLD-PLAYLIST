const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});


const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("Data from client :", data.toString());
        ws.send("Thanks");
    })
});