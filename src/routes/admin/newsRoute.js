const router = require("express").Router();
const model = require("../../model/news");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const fs = require("fs");
const path = require("path");

router.get("/news/add", breadcrumb, async (req, res) => {
    res.render("admin/newsForm", {
        page: "newsform",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
    });
});

router.post("/news/add", multer("images/yangiliklar"), 
async(req, res) => {
    await model.addNews(req.body, req.file.filename);
    req.flash("success", "new news was added successfully");
    res.redirect("/admin/news/add");
});

router.get("/news/table", breadcrumb, async (req, res) => {
    const news = await model.getNews();
    res.render("admin/newsTable", {
        news,
        page: "newsTable",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
    });
});

router.get("/news/delete/:id", async (req, res) => {
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

router.get("/news/update/:id", async (req, res) => {
    const newsId = req.params.id * 1;
    const data = await model.getOneNews(newsId);
    res.render("admin/newsUpdate", { ...data, successMessage: req.flash("success") });
});

router.post("/news/update/:id", multer("images/yangiliklar"), async (req, res) => {
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