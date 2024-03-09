const express= require("express")
const adminRouter  = express.Router()
const adminController =require("../controller/adminController/adminController")
const sessionMiddleware=require("../middleware/adminAuth")

adminRouter.get('/',sessionMiddleware.isLogout,adminController.loadLogin)
adminRouter.post('/',sessionMiddleware.isLogout,adminController.login)
adminRouter.get("/adminDashboard",sessionMiddleware.isLogin,adminController.loadAdminDashBoard)
adminRouter.get("/viewOfficer",sessionMiddleware.isLogin,adminController.viewOfficers)
adminRouter.patch("/approveOfficer",adminController.approveOfficer)
adminRouter.get("/logout",sessionMiddleware.isLogin,adminController.logout)

module.exports=adminRouter