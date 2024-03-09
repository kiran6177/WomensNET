const mongoose = require('mongoose')

const officerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    workingLocation:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    IDProof:{
        type:[String],
        required:true
    },
    street:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isApproved:{
        type:Number,
        default:0
    },
    encounteredCases:{
        type:Number,
        default:0
    }
})

const Officer = new mongoose.model('officer',officerSchema)

module.exports = Officer