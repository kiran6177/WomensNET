const isLogin = async(req,res,next)=>{
    if(req.session.admin){
        next()
    }else{
        res.redirect('/admin')
    }
}

const isLogout = async(req,res,next)=>{
    if(req.session.admin){
        res.redirect('/admin/adminDashboard')
    }else{
        next()
    }
}

module.exports = {
    isLogin,
    isLogout
}