const complaintModel = require("../../model/complaintSchema");
const officerModel=require("../../model/officerSchema")

const loadHomePage = async (req, res) => {
  try {
    res.render("user/home");
  } catch (error) {
    console.error(error);
  }
};
const loadRegisterComplaint = async (req, res) => {
  try {
    const officerAvailable = await officerModel.find({isApproved:1})
    res.render("user/register",{officerAvailable});
    
  } catch (error) {
    console.error(error);
  }
};

const loadComplaintAnonymous = async (req, res) => {
  try {
    const officerAvailable = await officerModel.find({isApproved:1})
    res.render("user/anonymousReg",{officerAvailable});
  } catch (error) {
    console.error(error);
  }
};
const RegisterComplaint = async (req, res) => {
  try {
    console.log(req.files);
    const presentedEvidences = req.files.map((images) => images.filename);
    const complaint = { evidence: presentedEvidences };
    for (const key in req.body) {
      if (req.body[key] != "") {
        complaint[key] = req.body[key];
      }
    }
    console.log(complaint)
    const createComplaint = await complaintModel.create(complaint);
    console.log(createComplaint);
    res.redirect("/complaintSuccess")
  } catch (error) {
    console.error(error);
  }
};
const loadComplaintSuccess = async (req, res) => {
  try {
    res.render("user/complaintSuccessPage");
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
