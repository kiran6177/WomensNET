const complaintModel = require("../../model/complaintSchema");
const officerModel = require("../../model/officerSchema");
const {customAlphabet}=require('nanoid')   
const loadHomePage = async (req, res) => {
  try {
    res.render("user/home");
  } catch (error) {
    console.error(error);
  }
};
const loadRegisterComplaint = async (req, res) => {
  try {
    const officerAvailable = await officerModel.find({ isApproved: 1 });
    res.render("user/register", { officerAvailable });
  } catch (error) {
    console.error(error);
  }
};

const loadComplaintAnonymous = async (req, res) => {
  try {
    const officerAvailable = await officerModel.find({ isApproved: 1 });
    res.render("user/anonymousReg", { officerAvailable });
  } catch (error) {
    console.error(error);
  }
};
const RegisterComplaint = async (req, res) => {
  try {
    const numberlimit=14
    const numberRange="0123456789"
    const generateId=customAlphabet(numberRange,numberlimit)
    const id = generateId()
    
    console.log(id)




    console.log(req.files);
    const presentedEvidences = req.files.map((images) => images.filename);
   

    const complaint = { evidence: presentedEvidences,complaint_Id:parseInt(id)};

    for (const key in req.body) {
      if (req.body[key] != "") {
        complaint[key] = req.body[key];
      }
    }
    
    console.log(complaint);
    const createComplaint = await complaintModel.create(complaint);
    console.log(createComplaint);
    res.redirect(`/complaintSuccess?id=${createComplaint.complaint_Id}`);
  } catch (error) {
    console.error(error);
  }
};
const loadComplaintSuccess = async (req, res) => {
  try {
    const {id} = req.query
    res.render("user/complaintSuccessPage",{complaint_Id:id});
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  loadHomePage,
  loadRegisterComplaint,
  loadComplaintAnonymous,
  RegisterComplaint,
  loadComplaintSuccess,
};
