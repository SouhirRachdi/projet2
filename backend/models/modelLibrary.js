const mongoose=require("mongoose")
const librarySchema=new mongoose.Schema({
    title:{type:String,required:true},
    video:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    createdOn:{type:Date,default:Date.now()},
    role:{type:String,enum:["prof","superAdmin"],default:"prof"}
})

module.exports=Library=mongoose.model("library",librarySchema)