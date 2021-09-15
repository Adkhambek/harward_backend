const homeRouter = require("./homeRoute");
const newsRouter = require("./newsRoute");
const blogRouter = require("./blogRoute");
const courseRouter = require("./courseRoute");
const aboutRouter = require("./aboutRoute");
const subjectsRouter = require("./subjectsRoute");
const contactRouter = require("./contactRoute");

module.exports = [
    homeRouter,
    newsRouter,
    blogRouter,
    courseRouter,
    aboutRouter,
    subjectsRouter,
    contactRouter
];
