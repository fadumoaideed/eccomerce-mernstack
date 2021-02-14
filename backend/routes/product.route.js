const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.baseRoute);

router.get("/products", productController.getProducts);

module.exports = router;
