const router = require("express").Router();
const model = require("../../model/course");

router.get("/test", async (req, res) => {
  const info = await model.getInfo();
  res.render("public/test", {info});
});

module.exports = router;