const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");
// router.use(express.static(path.join(rootDir, "public", "css")));
router.use(express.json());

const products = [];
router.get("/add-product", function (req, res, next) {
  res.sendFile(path.join(rootDir, "index.html"));
  //   next("errore");
  //   next();
});

router.post("/redirect", (req, res) => {
  console.log("no", req.body);
  products.push({ title: req.body.name });
  res.redirect("/");

  //   res.sendFile(path.join(__dirname, "default.html"));
});

router.get("/products", (req, res) => {
  res.send([...products]);
});

module.exports = { router, products };
