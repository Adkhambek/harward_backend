const router = require("express").Router();
const model = require("../../model/about");
const uploadVideo = require("../../lib/multer");

router.get("/about", async (req, res) => {
  const data = await model.selectAllData();
  res.render("admin/about", { ...data });
});

router.post("/about", uploadVideo.single("video"), async (req, res) => {
  console.log(req.file);
  res.send("OK");
});

module.exports = router;
