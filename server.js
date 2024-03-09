const express = require("express");
const path = require("path");
const nocache = require("nocache");
const session = require("express-session");
require("dotenv").config();
const db=require('./config/dbConfiguration')
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const officerRoute = require("./routes/officerRoute");

const app = express();

db.dbConnect()

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use('/assets',express.static(path.join(__dirname,'./assets')))
app.use(nocache());

// app.use('/admin',adminRoute)
app.use('/officer',officerRoute) 
app.use("/", userRoute);

app.listen(8000, () => {
  console.log(`Server Running on Port http://localhost:8000`);
});
