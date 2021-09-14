const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("public/index");
});

module.exports = router;
