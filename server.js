const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const PORT =process.env.PORT || 3000;
const bodyparser = require("body-parser");
app.use(bodyparser.json()); //stores data att req.body
const person = require("./models/person");
const menu = require("./models/menu");
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
