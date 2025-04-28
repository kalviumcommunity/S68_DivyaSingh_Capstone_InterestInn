const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    category: String,
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Product", productSchema);