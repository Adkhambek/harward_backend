const router = require("express").Router();

router.get("/news", (req, res) => {
  res.render("public/news");
});

module.exports = router;