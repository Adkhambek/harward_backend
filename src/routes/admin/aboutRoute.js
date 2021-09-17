const router = require("express").Router();
const model = require("../../model/about");
const uploadVideo = require("../../lib/multer");
const fs = require("fs");
const path = require("path");

router.get("/about", async (req, res) => {
  console.log("test");
  const data = await model.selectAllData();
  res.render("admin/about", { ...data, successMessage: req.flash("success") });
});

router.post("/about", uploadVideo.single("video"), async (req, res) => {
  if (req.file) {
    const { vidoe } = await model.getVideoName();
    fs.unlinkSync(path.join(process.cwd(), "src/public/video", vidoe));
    await model.updateAbout(req.body, req.file.filename);
    req.flash("success", "updated successfully")
    res.redirect("/admin/about");
  } else {
    console.log(req.body);
    await model.updateWithoutVideo(req.body);
    req.flash("success", "updated successfully")
    res.redirect("/admin/about");
  }
});

module.exports = router;
