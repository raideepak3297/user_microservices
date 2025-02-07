const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ref: String,
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: Date,
  modified_at: Date,
});

module.exports = mongoose.model("processed_user", userSchema);
