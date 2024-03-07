const mongoose = require("mongoose");
mongoose
  .connect(process.env.db)
  .then((resolve) => {
    console.log("mongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error(err);
  });
