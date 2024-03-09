const Officer = require('../../model/officerSchema')
const Complaint = require('../../model/complaintSchema')

const loadPortal = async(req,res)=>{
    try {
        const officerDet = await Officer.findById({_id:req.session.officer})
        console.log(officerDet)
        const complaintdata = await Complaint.find({officer_Id:req.session.officer})
        res.render('officer/portal',{officerDet,complaintdata})
    } catch (error) {
        console.log(error.message)
    }
}

const loadComplaint = async (req,res)=>{
    try {
        const {id} = req.query
        const officerDet = await Officer.findById({_id:req.session.officer})
        const complaintdata = await Complaint.findById({_id:id})
        console.log(complaintdata)
        res.render('officer/viewcomplaint',{officerDet,complaintdata})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loadPortal,
    loadComplaint
}