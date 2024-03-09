const express = require("express");
const userRouter = express.Router();
const uploads = require("../utils/officerMulter");
const userController = require("../controller/userController/userController");


userRouter.get("/", userController.loadHomePage);
userRouter.get("/register", userController.loadRegisterComplaint);
userRouter.post("/register",uploads.array('evidence'), userController.RegisterComplaint)
userRouter.get("/registerAnonymously", userController.loadComplaintAnonymous);
userRouter.post("/registerAnonymously",uploads.array('evidence'),userController.RegisterComplaint)
userRouter.get("/complaintSuccess",userController.loadComplaintSuccess)
userRouter.get("/search",userController.searchComplaintStatus)
userRouter.post("/sendMessage",userController.sendMessage)

module.exports = userRouter;
