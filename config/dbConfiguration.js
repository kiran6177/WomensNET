const mongoose = require("mongoose");

function dbConnect(){
  console.log(process.env.db);
  
  mongoose.connect(process.env.db);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
}
  
module.exports = {dbConnect}
 