const mongoose = require("mongoose");

function dbConnect(){
  mongoose.connect(process.env.db)
  .then((resolve) => {
    console.log("mongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error(err);
  });
}

module.exports = {dbConnect}
