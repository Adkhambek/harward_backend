const router = require("express").Router();

router.get("/kurslar", (req, res) => {
  res.render("public/kurslar");
});

module.exports = router;