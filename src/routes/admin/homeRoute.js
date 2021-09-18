const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("admin/index", { page: "dashboard"});
});

module.exports = router;
