const express = require("express");
const app = express();
const port = process.env.PORT || 8000; //(  process.env.PORT ||) use for hosting
const path = require("path");
const hbs = require("hbs");

//--- saving static path---
const staticPath = path.join(__dirname, "../public");
//--- saving views path---
const templatePath = path.join(__dirname, "../templates/views");
//--- saving partials path---
const partialsPath = path.join(__dirname, "../templates/partials");

//---setting view engine hbs---
app.set("view engine", "hbs");
//---setting path and setting new directory name---
app.set("views", templatePath);

//---using static web---
app.use(express.static(staticPath));

//---registering partials---
hbs.registerPartials(partialsPath);

//---routing---
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "OOPS! Page Not Found",
  });
});
app.listen(port, () => {
  console.log(`listening at the port ${port}`);
});
