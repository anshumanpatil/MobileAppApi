const mongoose = require("mongoose");

var uri = "mongodb://localhost:27017/mobappapi";

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms  
      poolSize: 15, // Maintain up to 15 socket connections
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 30000 // Close sockets after 30 seconds of inactivity
  };

  mongoose.connect(uri, options);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});