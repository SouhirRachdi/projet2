const {check,validationResult} =require("express-validator")
const signupRules=()=>[
    check('firstName',"firstName is required").trim().notEmpty(),
    check('lastName',"lastName is required").trim().notEmpty(),
    check("email","this field should be a valid email").trim().isEmail(),
    check('password',"password should contain at least 6 chars ").isLength({min:6,max:12}),
    
]

const signinRules=()=>[
    check("email","this field should be a valid email").isEmail(),
    check('password',"password should contain at least 6 chars ").isLength({min:6,max:12}),
]

const validator=(req,res,next)=>{
    const errors=validationResult(req)
    //console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    }
    next()
}

module.exports={signupRules,signinRules,validator}