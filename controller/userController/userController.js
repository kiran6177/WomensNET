const complaintModel = require("../../model/complaintSchema");
const officerModel = require("../../model/officerSchema");
const messageModel = require("../../model/messageSchema");
const { customAlphabet } = require("nanoid");
const { default: mongoose } = require("mongoose");
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
    const numberlimit = 14;
    const numberRange = "0123456789";
    const generateId = customAlphabet(numberRange, numberlimit);
    const id = generateId();

    console.log(id);

    console.log(req.files);
    const presentedEvidences = req.files.map((images) => images.filename);

    const complaint = {
      evidence: presentedEvidences,
      complaint_Id: parseInt(id),
    };

    for (const key in req.body) {
      if (req.body[key] != "") {
        complaint[key] = req.body[key];
      }
    }

    console.log(complaint);
    const createComplaint = await complaintModel.create(complaint);
    console.log(createComplaint);
    res.redirect("/complaintSuccess");
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

const searchComplaintStatus = async (req, res) => {
  try {
    const { search } = req.query;
    
    const searchComplaint = await complaintModel
      .findOne({ complaint_Id: parseInt(search) })
      .populate("officer_Id");
      const complaintObjectId= new mongoose.Types.ObjectId(searchComplaint._id)
      console.log('objid',searchComplaint._id)
      const complaintMessage=await messageModel.aggregate([{$match:{complaint_Id:complaintObjectId}},{$sort:{date:1}}])
    console.log(searchComplaint);
    console.log(complaintMessage)
    res.render("user/complaintStatus", { searchComplaint,complaintMessage});
  } catch (error) {
    console.error(error);
  }
};
const sendMessage = async (req, res) => {
  try {
    const { message, complaintId } = req.body;
    const messagesent = {
      message: message,
      complaint_Id: complaintId,
      owner: "User",
    };
    const createMessage = await messageModel.create(messagesent);
    res.status(200).json({ message: "Message sent Successfully" });
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
  searchComplaintStatus,
  sendMessage,
};
