const express = require("express");
const router = express();
const person = require("./../models/person");
const { json } = require("body-parser");
//post details on /person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming that request body contains person data
    const newperson = new person(data); //creat a new person using mongoose model and store data in it
    const response = await newperson.save();
    console.log("data saved successfully.");
    res.status(200).json({ response });
  } catch (error) {
    console.log("error in saving data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});

//get details on /person
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fatched successfully.");
    res.status(200).json({ data });
  } catch (error) {
    console.log("error in fatching data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
//get details on /person/:worktype

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (
      worktype == "chef" ||
      worktype == "owner" ||
      worktype == "waiter" ||
      worktype == "manager"
    ) {
      const data = await person.find({ work: worktype });
      console.log("data fatched successfully.");
      res.status(200).json({ data });
    } else {
      res.status(404)({ error: "Invailed work type!" });
    }
  } catch (error) {
    console.log("error in fatching data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPerson = req.body;
    const response = await person.findByIdAndUpdate(personId, updatedPerson, {
      new: true, //store the updated details in response
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json("Person not found");
    }
    console.log("data updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("error in fatching data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndRemove(personId);
    if (!response) {
      return res.status(404).json("Person not found");
    }
    console.log("person data deleted");
    res.status(200).json({massage:"person data removed successfully"});
  } catch (error) {
    console.log("error in deleting data!!", error);
    res.status(501).json({ error: "Internal server error!" });
  }
});
module.exports = router;
