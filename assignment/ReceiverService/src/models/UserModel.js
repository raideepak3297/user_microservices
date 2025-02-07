const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", userSchema);
