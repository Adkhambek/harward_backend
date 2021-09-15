const router = require("express").Router();

router.get("/blog", (req, res) => {
  res.render("public/blog");
});

module.exports = router;