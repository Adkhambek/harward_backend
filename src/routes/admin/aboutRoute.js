const router = require("express").Router();

router.get("/about", (req, res) => {
  res.render("admin/about");
});

module.exports = router;
