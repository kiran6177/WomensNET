const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
  crime: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  evidence: [{ type: String, required: true }],
  suspectName: { type: String },
  suspectMobile: { type: Number },
  suspectSocial: { type: String },
  otherDetails:{type:String},
  reportername: { type: String },
  reporteremail: { type: String },
  reporterMobile: { type: Number },
  houseDetail: { type: String },
  district: { type: String },
  state: { type: String },
  country: { type: String },
  officer_Id: { type: mongoose.Schema.Types.ObjectId, ref: "officer" },
  complaint_Id:{type:Number}
});
const complaintModel=mongoose.model("complaint",complaintSchema)
module.exports=complaintModel