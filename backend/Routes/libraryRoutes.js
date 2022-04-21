const express = require("express");
const Library = require("../models/modelLibrary");
const isProf = require("../middlewares/isProf");
const isAuth=require("../middlewares/passport") 
const router = express.Router();
const upload=require("../utils/multer");

//add video
router.post("/addvideo", isAuth(),isProf,upload("library").single("file"),async (req, res) => {
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;
  
    try {
        const newvideo = new Library(req.body);
        newvideo.video= `${url}/${file.path}`;
        await newvideo.save();
        res.send({ video: newvideo, message: "video succesffuly add" }); 
      } catch (err) {
        res.status(400).send(err.message);
      }
});

//delete video
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletevideo = await Library.deleteOne({ _id: req.params.id });
    console.log(deletevideo);
    if (deletevideo.deletedCount == 1) {
      return res.send({ msg: "video secessufly deleted" });
    }
    res.status(400).send({msg:"video already deleted"})
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//get all videos
router.get("/library", async (req, res) => {
  try {
    const allVideos = await Library.find({}).populate("user","FirstName");
    res.send({ allVideos});
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//get Video by Id
router.get("/:id", async (req, res) => {
  try {
    const oneVideo = await Library.findById(req.params.id);
    res.send({ oneVideo });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;