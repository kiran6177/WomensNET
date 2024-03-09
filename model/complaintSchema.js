const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
  crime: {
    type: String,
    required: true,
  },
  date: {
    type: String,
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
  name: { type: String },
  email: { type: String },
  mobile: { type: Number },
  house: { type: String },
  district: { type: String },
  state: { type: String },
  country: { type: String },
  officer_Id: { type: mongoose.Schema.Types.ObjectId, ref: "officer" },
});