const express = require("express");
const router = express.Router();

const app = express();

const welcomeMessage = {
    id: 0,
    from: "Bart",
    text: "Welcome to CYF chat system!",
  };
  
  //This array is our "data store".
  //We will start with one message in the array.
  //Note: messages will be lost when Glitch restarts our server.
  const messages = [welcomeMessage];
  let avaibleId = 1;

  
//messages

app.get("/messages", function (request, response) {
    response.send(messages);
  });
  
  //POST  messages
  app.post("/messages", function (request, response) {
    const {from ,text} = request.body //cleaning body
    let newMessage = {from ,text};
    newMessage.id = avaibleId++;
    messages.push(newMessage)
    response.sendStatus(201);
  });
  

  module.exports = router;