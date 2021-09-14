require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const path = require("path");
const { PORT } = require("./config/keys");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", express.static(path.join(__dirname, "public/dashboard")));
app.use(helmet());

//ejs setting:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(routes);

module.exports = { PORT, app };
