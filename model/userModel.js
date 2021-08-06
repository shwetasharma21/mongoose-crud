const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: ["Can't be blank"] },
  email: { type: String, unique: true, required: ["Can't be blank"] },
  year: Number,
  state: String,
});

module.exports = mongoose.model("User", userSchema);
