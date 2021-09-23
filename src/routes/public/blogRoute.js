const router = require("express").Router();
const model = require("../../model/contact");
const infoModel = require("../../model/info");

router.get("/blog", async (req, res) => {
  const info = await infoModel.getInfo();
  res.render("public/blog", {info});
});

module.exports = router;