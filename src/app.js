require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const path = require("path");
const { PORT } = require("./config/keys");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());

//ejs setting:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = { PORT, app };
