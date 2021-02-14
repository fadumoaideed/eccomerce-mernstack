const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
// import and initiate the posts model to query the database
const Products = mongoose.model("products");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get posts on route "/getProducts"
exports.getProducts = async (req, res) => {
  const products = await Products.find();
  res.json(products);
};
