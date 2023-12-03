const ProductModel = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.render("index.pug", { test: 2, prods: products });
  console.log("Added product");
  res.render("index.ejs", { test: "test2", prods: ProductModel.fetchAll() });
  // res.sendFile(path.join(rootDir, "views", "index.html"));
  //   next("errore");
};

exports.postRedirect = (req, res) => {
  console.log("no", req.body);
  const newProduct = new ProductModel(req.body.name);
  newProduct.save();
  //   products.push({ title: req.body.name });
  res.redirect("/");

  //   res.sendFile(path.join(__dirname, "default.html"));
};

exports.getProducts = (req, res) => {
  res.send(ProductModel.fetchAll());
};
