const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    comments: [{
      text: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
      createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Story", storySchema);