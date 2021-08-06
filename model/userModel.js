const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  accNo: { type: Number, required: true },
  bankName: { type: String, required: true },
  accType: { type: String, default: "Savings" },
  balance: { type: Number, default: 0 },
});

const userSchema = new mongoose.Schema({
  userName: { type: String, required: ["Can't be blank"] },
  email: { type: String, unique: true, required: ["Can't be blank"] },
  year: Number,
  state: String,
  accounts: [accountSchema],
});

module.exports = mongoose.model("User", userSchema);
