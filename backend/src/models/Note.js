const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Note", noteSchema);