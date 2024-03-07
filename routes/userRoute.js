const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController/userController");

userRouter.get("/", userController.loadHomePage);
userRouter.get("/register", userController.loadRegisterComplaint);
userRouter.get("/registerAnonymously",userController.loadComplaintAnonymous)

module.exports = userRouter;
