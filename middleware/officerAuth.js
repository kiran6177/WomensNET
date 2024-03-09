const isLogin = async(req,res,next)=>{
    if(req.session.officer){
        next()
    }else{
        res.redirect('/officer/login')
    }
}

const isLogout = async(req,res,next)=>{
    if(req.session.officer){
        res.redirect('/officer')
    }else{
        next()
    }
}

module.exports = {
    isLogin,
    isLogout
}