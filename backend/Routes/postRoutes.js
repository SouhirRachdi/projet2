const express = require("express");
const Post = require("../models/modelPost");
const isAuth =require("../middlewares/passport");
const router = express.Router();


//add Post
router.post("/addPost", isAuth(),async (req, res) => {
    const { title, message,question} = req.body;
    try {
        const newPost = new Post({...req.body,user:req.user._id});
        await newPost.save();
        res.send({ Post: newPost, message: "Post succesffuly add" });
      } catch (err) {
        res.status(400).send(err.message);
      }
});

//get posts
router.get("/allPosts", async (req, res) => {
    try {
      const getAllPosts = await Post.find().populate("user");
      res.send({getAllPosts});
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  //get post 

router.get("/getPost/:id",isAuth(), async (req, res) => {
    const { id } = req.params;
    try {
      const getOnePost = await Post.findById(id);
      res.send({getOnePost});
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  //update post
  router.put("/upDatePost/:id",isAuth(), async (req, res) => {
    const { id } = req.params;
    const { title, message,question } = req.body;
    try {
      const updatedPost  =await Post.findByIdAndUpdate(id,{ title, message,question },{ new: true });
     
      res.send({updatedPost});
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  
  //delete Post
  router.delete("/deletePost/:id",isAuth(), async (req, res) => {
    const { id } = req.params;
    try {
      const deletPost = await Post.findByIdAndDelete(id);
      console.log(deletPost);
      if (deletPost.deletedCount == 1) {
        return res.send({ msg: "post secessufly deleted" });
      }
      res.status(400).send({msg:"post already deleted"})
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  //commentPost
  router.put("/commentPost/:id", async (req, res) => {
    const { id } = req.params;
    const comment = {
      text: req.body.text
    };
    try {
      const commentpost = await Post.findByIdAndUpdate(id,{$push: { comments: comment },}
      ,{new:true});
      res.send({ Post :commentpost, message: "comment succesffuly posted" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  //likePost
  router.put("/likePost/:id",isAuth(), async (req, res) => {
    const { id } = req.params;
   
    try {
      const likePost = await Post.findByIdAndUpdate(id,{$push: { likesCount: req.user._id },}
      ,{new:true});
     
     
      res.send({ post:likePost , message: "likePost succesffuly " });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  //get post by Id
router.get("/:id", async (req, res) => {
  try {
    const onePost = await Post.findById(req.params.id);
    res.send({ onePost });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
  module.exports = router;