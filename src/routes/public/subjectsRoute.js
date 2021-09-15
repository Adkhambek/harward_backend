const router = require("express").Router();

router.get("/subjects", (req, res) => {
  res.render("public/subjects");
});

module.exports = router;