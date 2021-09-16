const router = require("express").Router();

router.get("/statistics", (req, res) => {
  res.render("admin/statistics");
});

module.exports = router;
