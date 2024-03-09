
const express = require("express");
const officerRoute = express.Router();
const officerAuth = require("../controller/officerController/officerAuth");
const officerFeat = require('../controller/officerController/officerFeat')
const officerMiddleWare = require('../middleware/officerAuth')
const upload = require('../utils/officerMulter') 

officerRoute.get("/login", officerMiddleWare.isLogout,officerAuth.loadLogin);
officerRoute.post("/login", officerMiddleWare.isLogout,officerAuth.login);
officerRoute.get("/register", officerMiddleWare.isLogout,officerAuth.loadRegister);
officerRoute.post("/register",officerMiddleWare.isLogout,upload.fields([{name:'profileimg',maxcount:1},{name:'identityimg',maxcount:2}]),officerAuth.register)
officerRoute.get('/otp',officerMiddleWare.isLogout,officerAuth.loadOTP)
officerRoute.post('/otp',officerMiddleWare.isLogout,officerAuth.OTP)
officerRoute.get('/wait',officerMiddleWare.isLogout,officerAuth.loadWait)
officerRoute.get("/logout", officerMiddleWare.isLogin,officerAuth.logout);

officerRoute.get('/',officerMiddleWare.isLogin,officerFeat.loadPortal)
module.exports = officerRoute;

