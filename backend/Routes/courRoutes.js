const express = require("express");
const Cour = require("../models/modelCours");
const isProf = require("../middlewares/isProf");
const isAuth=require("../middlewares/passport");
const upload=require("../utils/multer");

const router = express.Router();
//addNewCour
router.post("/addCour", isAuth(),isProf,upload("cours").single("file"), async (req, res) => {
    const url = `${req.protocol}://${req.get('host')}`;
    console.log(req.file);
    const { file } = req;
    try {
      const newCour = new Cour (req.body);
      newCour.content= `${url}/${file.path}`;
      await newCour.save();
      res.send({ cour: newCour, message: "cour succesffuly" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  //getAllCourses
router.get("/courses",isAuth(), async (req, res) => {
    try {
      const allCours = await Cour.find({});
      res.send({ allCours });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  //get cour by Id
router.get("/:id", async (req, res) => {
  
  try {
    const oneCour = await Cour.findById(req.params.id);
    res.send({ oneCour });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//update cour
router.put("/:id",upload("cours").single("file"), async (req, res) => {
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;
  try {
    let updateCour = await Cour.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { $set: {content:`${url}/${file.path}` } }
    );
    if (updateCour.modifiedCount == 1) {
      return res.send({ msg: "cour secessufly update" });
    }
    res.status(400).send({ msg: " no thing to update" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// Delete cour
router.delete("/:id", async (req, res) => {
  try {
    const deleteCour = await Cour.deleteOne({ _id: req.params.id });
    console.log(deleteCour);
    if (deleteCour.deletedCount == 1) {
      return res.send({ msg: "cour secessufly deleted" });
    }
    res.status(400).send({ msg: "coour already deleted" })
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//get Cour by Id
router.get("/:id", async (req, res) => {
  try {
    
    const oneCour = await Cour.findById(req.params.id);
    res.send({ oneCour });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
  module.exports = router;