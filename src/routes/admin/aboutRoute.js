const router = require("express").Router();
const model = require("../../model/about");
const multer = require("../../lib/multer");
const fs = require("fs");
const path = require("path");

router.get("/about", async (req, res) => {
  const data = await model.selectAllData();
  res.render("admin/about", { ...data, successMessage: req.flash("success") });
});

router.post("/about", multer("video").single("video"), async (req, res) => {
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
