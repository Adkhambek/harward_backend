const router = require("express").Router();
const model = require("../../model/news");
const notification = require("../../model/notification");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const fs = require("fs");
const path = require("path");

router.get("/news/add", redirect, breadcrumb, async (req, res) => {
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    res.render("admin/newsForm", {
        page: "newsform",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
});

router.post("/news/add", redirect, multer("images/yangiliklar"), 
async(req, res) => {
    await model.addNews(req.body, req.file.filename);
    req.flash("success", "new news was added successfully");
    res.redirect("/admin/news/add");
});

router.get("/news/table", redirect, breadcrumb, async (req, res) => {
    const news = await model.getNews();
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    res.render("admin/newsTable", {
        news,
        page: "newsTable",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
});

router.get("/news/delete/:id", redirect, async (req, res) => {
    const newsId = req.params.id * 1;
    const { image } = await model.getImage(newsId);
    fs.unlinkSync(
        path.join(process.cwd(), "src/public/images/yangiliklar", image)
    );
    await model.deleteNews(newsId);
    req.flash(
        "success",
        `the news (id = ${newsId}) was successfully deleted`
    );
    res.redirect("/admin/news/table");
});

router.get("/news/update/:id", redirect, async (req, res) => {
    const newsId = req.params.id * 1;
    const data = await model.getOneNews(newsId);
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    res.render("admin/newsUpdate", { ...data, successMessage: req.flash("success"), course, contact });
});

router.post("/news/update/:id", redirect, multer("images/yangiliklar"), async (req, res) => {
    const newsId = req.params.id * 1;
    if (req.file) {
        const { image } = await model.getImage(newsId);
        fs.unlinkSync(
            path.join(process.cwd(), "src/public/images/yangiliklar", image)
        );
        await model.updateNews(newsId, req.body, req.file.filename);
        req.flash("success", `the news (id = ${newsId})updated successfully`);
        res.redirect("/admin/news/table");
      } else {
        await model.updateWithoutImage(newsId, req.body);
        req.flash("success", `the news (id = ${newsId}) updated successfully`);
        res.redirect("/admin/news/table");
      }
    
});

module.exports = router