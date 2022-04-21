const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    title: String,
    message:{type:String,required:true},
    question:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    likesCount:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
   comments:[{text:String,user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},createdAt: {
    type: Date,
    default: new Date(),
}}]
},{timestamps: true});

module.exports=Post=mongoose.model("post",postSchema)