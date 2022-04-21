const isProf=(req,res,next)=>{
    if(req.user.role!="prof"){
        return res.status(400).send({msg:"you are not prof"})
    }
    next()
}

module.exports=isProf