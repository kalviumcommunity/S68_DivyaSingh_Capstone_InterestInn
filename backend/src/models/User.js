const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["member", "creator"], default: "member" },
    googleId: String,
  });

  module.exports = mongoose.model("User", userSchema);