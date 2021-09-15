const router = require("express").Router();

router.get("/about", (req, res) => {
  res.render("public/about");
});

module.exports = router;