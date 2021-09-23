const router = require("express").Router();
const model = require("../../model/contact");

router.get("/blog", async (req, res) => {
  const info = await model.getInfo();
  res.render("public/blog", {info});
});

module.exports = router;