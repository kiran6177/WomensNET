const Officer = require('../../model/officerSchema')

const loadPortal = async(req,res)=>{
    try {
        const officerDet = await Officer.findById({_id:req.session.officer})
        console.log(officerDet)
        res.render('officer/portal',{officerDet})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loadPortal
}