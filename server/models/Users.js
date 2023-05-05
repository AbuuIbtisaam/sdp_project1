const mongoose=require("mongoose");

const StudentSchema= new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    } 

},
{collection: 'Users'});

const Student=mongoose.model("Users",StudentSchema);
module.exports=Student;