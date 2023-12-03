// const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const { router: adminRouter } = require("./routes/admin");
const bodyParser = require("body-parser");

// app.engine(
//   "hbs",
//   engine({
//     layoutsDir: path.join(__dirname, "views", "layouts"),
//     defaultLayout: false,
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public", "css")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin/", adminRouter);

app.get("/", (req, res, next) => {
  console.log(__dirname, req.url);
  res.status(200).render("default.pug");
  //   res.status(200).sendFile(path.join(__dirname, "views", "default.html"));
});

app.use((req, res) => {
  console.log("errore");
  res.status(404).render("error.pug");
  //   res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(8080);
// const { requestHandler } = require("./routes");

// const server = http.createServer(app);

// server.listen(8080);
