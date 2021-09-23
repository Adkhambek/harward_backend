const router = require("express").Router();
const model = require("../../model/course");
const infoModel = require("../../model/info");

router.get("/test", async (req, res) => {
  const info = await infoModel.getInfo();
  res.render("public/test", {info});
});

module.exports = router;