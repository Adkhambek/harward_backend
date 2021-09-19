const router = require("express").Router();
const model = require("../../model/about");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const fs = require("fs");
const path = require("path");

router.get("/about", breadcrumb, async (req, res) => {
  const data = await model.selectAllData();
  res.render("admin/about", { 
    ...data, 
    successMessage: req.flash("success"),
    breadcrumb: req.breadcrumb,
  });
});

router.post("/about", multer("video"), async (req, res) => {
  if (req.file) {
    const { vidoe } = await model.getVideoName();
    fs.unlinkSync(path.join(process.cwd(), "src/public/video", vidoe));
    await model.updateAbout(req.body, req.file.filename);
    req.flash("success", "updated successfully");
    res.redirect("/admin/about");
  } else {
    await model.updateWithoutVideo(req.body);
    req.flash("success", "updated successfully");
    res.redirect("/admin/about");
  }
});

module.exports = router;
