const mongoose=require("mongoose")
const courSchema=new mongoose.Schema({
    materialName:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String},
    createDate:{type:Date,default:Date.now()},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

module.exports=Cour=mongoose.model("cour",courSchema)