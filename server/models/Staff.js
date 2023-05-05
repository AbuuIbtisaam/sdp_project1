//This file define the structure of the database
const mongoose=require("mongoose");

const staffSchema = mongoose.Schema({
    fName: String,
    lName: String,
    staffId: {type:Number,unique:true},       
    MobileNo1:{type:String,unique:true},
    MobileNo2:{type:String,unique:true},
})

const Staff = mongoose.model("Staff",staffSchema);
module.exports = Staff