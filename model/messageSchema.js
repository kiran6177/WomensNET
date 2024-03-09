const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now() },
  message: { type: String, required: true },
  owner: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" },
  complaint_Id: { type: mongoose.Schema.Types.ObjectId, ref: "complaint"},
});

const messageModel=mongoose.model('message',messageSchema)
module.exports=messageModel