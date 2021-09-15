const router = require("express").Router();

router.get("/aloqa", (req, res) => {
  res.render("public/aloqa");
});

module.exports = router;