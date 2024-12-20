//*===============================
//* Event Module in Node JS :- 
//*===============================
//? Node.js has a built-in module, called "Events", 
//? where you can create-, fire-, and listen for your own events.

//* Example 1 : Registering for the event to be fired only one time using once. 

//* Example 2 : Create an event emitter instance and register a couple of callbacks.

//* Example 3 : Registering for the event with callback parameters. 


const EventEmitter = require("events");
const event = new EventEmitter();


event.on("getData", () => {
    console.log("Your data is here");
});


event.emit("getData");




//* function defining  
event.on("checkPage", (statusCode, msg) => {
    console.log(`Status Code is ${statusCode} and the page is ${msg}`);
});

//* functio calling
event.emit("checkPage", 200, "ok");