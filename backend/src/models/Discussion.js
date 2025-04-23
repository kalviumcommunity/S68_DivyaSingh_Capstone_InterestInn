const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Discussion", discussionSchema);