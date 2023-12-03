const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
const {
  getAddProduct,
  postRedirect,
  getProducts,
} = require("../controllers/admin");
// router.use(express.static(path.join(rootDir, "public", "css")));
router.use(express.json());

router.get("/add-product", getAddProduct);

router.post("/redirect", postRedirect);

router.get("/products", getProducts);

module.exports = { router };
