require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const session = require("express-session")
const path = require("path");
const flash = require("connect-flash")
const { PORT } = require("./config/keys");
const routes = require("./routes");
const cookie = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", express.static(path.join(__dirname, "public/dashboard")));
app.use(helmet());
app.use(session({
    secret: "harvard",
    saveUninitialized: true,
    resave: true
}))
app.use(flash());
app.use(cookie());

//ejs setting:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(routes);
module.exports = { PORT, app };
