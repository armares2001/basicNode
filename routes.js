const fs = require("fs");
const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let filePath = "./default.html";
  if (req.url === "/") {
    filePath = "./index.html";
  }
  if (req.url === "/message") {
    filePath = "./message.html";
  }

  let html;
  try {
    console.log("url", req.url);
    console.log("filePath", filePath);
    html = fs.readFileSync(filePath, "utf-8").toString();
    if (req.method == "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
        // html = html.replace("${{", chunk);
      });
      return req.on("end", () => {
        console.log("no", filePath);
        const parsedBody = Buffer.concat(body).toString();
        const bodyArr = parsedBody.split("&");
        const newBodyArr = bodyArr.map((param) => ({
          name: param.split("=")[0],
          value: param.split("=")[1],
        }));
        console.log(parsedBody);
        newBodyArr.forEach((param) => {
          html = html.replace("${{" + param.name + "}}", param.value);
        });
        res.write(html);
        return res.end();
      });
    }
    if (req.method == "GET") {
      res.write(html);
      res.end();
    }
    res.end();
  } catch (err) {
    console.error(err);
    res.end();
  }
};

module.exports = { requestHandler };
