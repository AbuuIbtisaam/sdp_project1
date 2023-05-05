//This file define the structure of the database
const mongoose=require("mongoose");

const schema = mongoose.Schema({
    fName: String,
    lName: String,
    rollNumber: {type:Number,unique:true},
    studClass: Number,
    Section: String,
    fatherName:String,
    motherName:String,
    MobileNo1:{type:String,unique:true},
    MobileNo2:{type:String,unique:true},
})

module.exports = mongoose.model("Students",schema);
