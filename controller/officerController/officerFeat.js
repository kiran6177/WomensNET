const Officer = require('../../model/officerSchema')
const Complaint = require('../../model/complaintSchema')
const Message = require('../../model/messageSchema')
const { ObjectId } = require('mongodb')

const loadPortal = async(req,res)=>{
    try {
        const officerDet = await Officer.findById({_id:req.session.officer})
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
        const messages = await Message.aggregate([{$match:{complaint_Id:new ObjectId(id)}},{$sort:{date:1}}])
        res.render('officer/viewcomplaint',{officerDet,complaintdata,messages})
    } catch (error) {
        console.log(error.message)
    }
}

const complaintUpdate = async (req,res)=>{
    try {
        const data = req.body
        const dataToStore = {
            message:data.message,
            status:data.status,
            complaint_Id:new ObjectId(data.complaint_Id),
            owner:"Officer"
        }
        const statusChange = await Complaint.findByIdAndUpdate({_id:data.complaint_Id},{$set:{status:data.status}})
        if(data.status === "Closed"){
            const officerCountUpdate = await Officer.findByIdAndUpdate({_id:statusChange.officer_Id},{$inc:{encounteredCases:1}})
        }
        const messageCreate = await Message.create(dataToStore)
        if(messageCreate){
            res.json({success:true})
        }else{
            res.json({error:"Error writing update"})
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loadPortal,
    loadComplaint,
    complaintUpdate
}