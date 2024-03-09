const  adminModel=require('../../model/adminSchema')
const officerModel = require("../../model/officerSchema")
const loadLogin=async(req,res)=>{
    try {

       
        res.render('admin/login')
    } catch (error) {
        console.error(error)
    }
}
const login = async(req,res)=>{
    try {
        const {email,password} = req.body
       const isAdmin=await adminModel.findOne({email:email})
       console.log(isAdmin)
       if(isAdmin ){
       if( isAdmin.password == password) {
        req.session.admin=isAdmin._id

        res.redirect('/admin/adminDashboard')
        }else{
            res.render('admin/login',{err:"Invalid Password!"})

        }
      
       }else{
        res.render('admin/login',{err:"Invalid Admin!"})
        
        
       }


        
    } catch (error) {
        console.error(error)
    }
}

const loadAdminDashBoard=async(req,res)=>{
    try {
        const officersEnrolled = await officerModel.find({})
        const isAdminLogin= await adminModel.findById({_id:req.session.admin})
        res.render("admin/admindashboard",{officersEnrolled,isAdminLogin})
    } catch (error) {
        console.error(error)
    }
}

const viewOfficers=async(req,res)=>{
    try {
        const {oid} = req.query
        const officerDetail = await officerModel.findById({_id:oid})
        const isAdminLogin= await adminModel.findById({_id:req.session.admin})
        res.render("admin/viewOfficer",{officerDetail,isAdminLogin})

    } catch (error) {
        console.error(error)
    }
}

const approveOfficer = async(req,res)=>{
    try {
        const {officerid}=req.body
        console.log(officerid)
        const approveUser = await officerModel.findByIdAndUpdate({_id:officerid},{$set:{isApproved:1}})
        console.log(approveUser)
        res.status(200).json({message:"Officer Approved Successfully"})
    } catch (error) {
        console.error(error)
    }
}

const logout = async (req,res)=>{
    try {
        req.session.admin = null
        res.redirect('/admin')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={loadLogin,login,loadAdminDashBoard,viewOfficers,approveOfficer,logout}