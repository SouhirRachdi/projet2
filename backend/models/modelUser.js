const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:{type:String,trim:true},
    lastName:{type:String,trim:true},
    email:{type:String,trim:true,lowercase:true},
    password:{type:String},
    image:{type:String},
    createdOn:{type:Date,default:Date.now()},
    ban:{type:Boolean,default:false},
    role:{type:String,enum:["student","prof","superAdmin"],default:"student"}
})

module.exports=User=mongoose.model("user",userSchema)