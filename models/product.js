var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  author: String,
  rating: Number,
  review: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
