const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "hp", "lenevo", "mi"],
      message: `{VALUE} is not allowed`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
