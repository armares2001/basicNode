// const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const { router: adminRouter } = require("./routes/admin");
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "public", "css")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin/", adminRouter);

app.use("/", (req, res, next) => {
  console.log(__dirname);
  res.status(404).sendFile(path.join(__dirname, "default.html"));
  //   next();
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "error.html"));
});
app.listen(8080);
// const { requestHandler } = require("./routes");

// const server = http.createServer(app);

// server.listen(8080);
