const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/modelUser");
const isProf = require("../middlewares/isProf");
const isAuth=require("../middlewares/passport")
const {signupRules,signinRules,validator}=require("../middlewares/validator")
const upload=require("../utils/multer")

const router = express.Router();
//Sigin UP
router.post("/signup",signupRules(),validator,async (req, res) => {
    const {firstName,lastName,email, password } = req.body;
    try {
      const existUser = await User.findOne({ email });
      if (existUser) {
        return res.status(400).send({ msg: "user already exist please login" });
      }
      const newUser = new User( req.body );
      const hashedPassword = await bcrypt.hash(password, 10);
      newUser.password = hashedPassword;
      await newUser.save();
      res.send({ newUser, msg: "user successfully registered" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message  });
    }
  });
  //Sign In
router.post("/signin",signinRules(),validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      const existUser = await User.findOne({ email });
      if (!existUser) {
        return res.status(400).send({ msg: "bad credentials" });
      }
      const matched = await bcrypt.compare(password, existUser.password);
      if (!matched) {
        return res.status(400).send({ msg: "noo" });
      }
      const payload = {
        _id: existUser._id,
        name: existUser.fullName,
      };
      
      const token = jwt.sign(payload, process.env.privateKey);
      console.log(token);
      res.send({ user: existUser, token: token });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  });
  // Delete User
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    console.log(deleteUser);
    if (deleteUser.deletedCount == 1) {
      return res.send({ msg: "user secessufly deleted" });
    }
    res.status(400).send({msg:"user already deleted"})
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//update USer
router.put("/:id",upload("users").single("file"), async (req, res) => {
  //req.body
  //req.file
  
  try {
    if(req.file){
      const url = `${req.protocol}://${req.get('host')}`;
      const { file } = req;
        let updateUser = await User.updateOne(
          { _id: req.params.id },
          { $set: { ...req.body,image:`${url}/${file.path}` } },
        );
        if (updateUser.modifiedCount == 1) {
         const updatedUser= await User.findOne({ _id: req.params.id })
          return res.send({ current:updatedUser,msg: "product secessufly update" });
        }
    }
  else{
        let updateUser = await User.updateOne(
          { _id: req.params.id },
          { $set: { ...req.body } }  );
          if (updateUser.modifiedCount == 1) {
            const updatedUser= await User.findOne({ _id: req.params.id })
            return res.send({current:updatedUser, msg: "product secessufly update" });
          }
      
  }
  

    
    res.status(400).send({ msg: " no thing to update" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//get user by Id
router.get("/getuserbyid", async (req, res) => {
  const _id = req.body;
  try {
    const oneUser = await User.findById(_id);
    res.send({ oneUser });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//get all usres

router.get('/all',isAuth(),isProf,async(req,res)=>{
  const allUsers=await User.find()
  res.send({allUsers})
})
//current
router.get("/current",isAuth(),async(req,res)=>{
 // req.user.role=undefined
  res.send({user:req.user})
})

/*router.post('/profile', function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})*/

  
  module.exports = router;