// const products = [{ title: "test" }, { title: "test2" }];
const products = [];
const { error, log } = require("console");
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    let products = [];
    let file;
    try {
      file = fs.readFileSync(p, "utf8");
      console.log("content", JSON.parse(file));
      products = JSON.parse(file);
      products.push(this);
    } catch (err) {
      console.error(err.code + ": " + err.message);
    }
    console.log(products);
    console.log("tappost");

    fs.writeFileSync(p, JSON.stringify(products), "utf-8");
    // fs.writeFile(p, JSON.stringify(products));
    // products.push(this);
  }

  static fetchAll() {
    let products = [];
    try {
      products = fs.readFileSync(p, "utf-8");
    } catch (error) {
      console.error(err.code + ": " + err.message);
    }
    return typeof products === "string" ? JSON.parse(products) : products;
    // return [...products];
  }
}

products.push(new Product("test"), new Product("test2"));

module.exports = Product;
