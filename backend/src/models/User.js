const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["member", "creator"], default: "member" },
    googleId: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
    discussions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discussion" }]
  });

  module.exports = mongoose.model("User", userSchema);