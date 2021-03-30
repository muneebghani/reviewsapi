var express = require("express");
var router = express.Router();
var Product = require("../../models/product");

//get products
router.get("/", async (req, res) => {
  let products = await Product.find();
  return res.send(products);
});

//get single product
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).send("Product With given ID is not present");
    return res.send(product);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});

module.exports = router;
