const Officer = require('../../model/officerSchema')
const mailer = require('../../utils/mailer')
const loadLogin = async(req,res)=>{
    try{
        res.render('officer/login')
    }catch(err){
        console.log(err.message)
    }
}
const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        console.log(email,password)
        const officerExist = await Officer.findOne({email:email})
        if(officerExist){
            if(officerExist.password === password){
                if(officerExist.isApproved === 1){
                    req.session.officer = officerExist._id
                    res.redirect('/officer/')
                }else{
                res.redirect('/officer/wait')
                }
            }else{
            res.render('officer/login',{err:"Invalid Password!"})
            }
        }else{
            res.render('officer/login',{err:"Invalid Officer!"})
        }
    } catch (error) {
        console.log(error.message)
    }
}

const loadRegister = async(req,res)=>{
    try{
        res.render('officer/register');
    }catch(err){
        console.log(err.message)
    }
}

const register = async (req,res)=>{
    try {
        const {name,designation,currentloc,mobile,email,housedetails,district,state,country,password,cpassword} = req.body
        const officerExist = await Officer.find({email:email})
        if(officerExist.length === 0){
        if(password === cpassword){
            const officerdata = {
                name,
                designation,
                workingLocation:currentloc,
                profileImage:req.files.profileimg[0].filename,
                mobile,
                email,
                IDProof:[req.files.identityimg[0].filename,req.files.identityimg[1].filename],
                street:housedetails,
                district,
                state,
                country,
                password
            }
            req.session.officerdata = officerdata
            const OTP = Math.floor(100000 + Math.random() * 900000);
            req.session.otp = OTP
            const mailResult = mailer.sendmail(email,OTP)
            if(mailResult){
                res.cookie('timer',true,{
                    maxAge:60000
                }).redirect(`/officer/otp`)
            }else{
                res.render('officer/register',{err:"Error in sending mail!!"})
                console.log(mailResult)
            }
        }else{
            res.render('officer/register',{err:"Password mismatch!!"})
        } 
    }else{
        res.render('officer/register',{err:"Account already exist!!"})
    }
    } catch (error) {
        console.log(error.message)
    }
}

const loadOTP = async (req,res)=>{
    try {
        res.render('officer/otp')
    } catch (error) {
        console.log(error)
    }
}
const OTP = async (req,res)=>{
    try {
        const {otp} = req.body

    if(req.session.otp){
        if(otp == req.session.otp){
            const officerSave = await Officer.create(req.session.officerdata)
            res.redirect('/officer/wait')
        }else{
            res.render('officer/otp',{err:'OTP Mismatch'})
        }
    }else{
        res.render('officer/otp',{err:'OTP Mismatch. Please register again.'})
    }
    } catch (error) {
        console.log(error.message)
    }
}

const loadWait = async(req,res)=>{
    try {
        res.render('officer/wait')
    } catch (error) {
        console.log(error.message)
    }
}

const logout = async (req,res)=>{
    try {
        req.session.officer = null
        res.redirect('/officer/login')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    loadLogin,
    login,
    loadRegister,
    register,
    loadOTP,
    OTP,
    loadWait,
    logout
}