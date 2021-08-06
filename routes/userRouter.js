const express = require("express");
//const mongoose = require("mongoose");

const User = require("../model/userModel");

const router = express.Router();

router.get("/findAll", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get("/findOne/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    res.status(404).json({
      msg: "Record not found",
    });
  }
  res.send(user);
});

router.post("/create", async (req, res) => {
  const { userName, email, year, state } = req.body;
  const user = new User({ userName, email, year, state });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

router.delete("/deleteOne/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.deleteOne({ _id: id });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

router.put("/updateOne/:id", async (req, res) => {
  const id = req.params.id;
  const { userName, email, year, state } = req.body;
  const updatedObj = { userName, email, year, state };
  try {
    const result = await User.updateOne({ _id: id }, updatedObj);
    res.send(result);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});
module.exports = router;
