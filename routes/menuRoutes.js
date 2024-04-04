const express = require("express");
const router = express();
const menu = require("./../models/menu");

//post details on /menu
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming that request body contains menu data
    const newmenu = new menu(data); //creat a new menu using mongoose model and store data in it
    const response = await newmenu.save();
    console.log("data saved successfully.");
    res.status(200).json({ response });
  } catch (error) {
    console.log("error in saving data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
//get details on /menu
router.get("/", async (req, res) => {
  try {
    const data = await menu.find();
    console.log("data fatched successfully.");
    res.status(200).json({ data });
  } catch (error) {
    console.log("error in fatching data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});


router.get("/:tastetype", async (req, res) => {
  try {
    const tastetype = req.params.tastetype;
    if (
      tastetype == "other" ||
      tastetype == "sweet" ||
      tastetype == "spicy"
    ) {
      const data = await menu.find({taste:tastetype});
      console.log("data fatched successfully.");
      res.status(200).json({ data });
    }else{
      res.status(404)({error:"Invailed taste type!"})
    }
  } catch (error) {
    console.log("error in fatching data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
module.exports = router;
