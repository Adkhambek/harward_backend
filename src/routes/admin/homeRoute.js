const router = require("express").Router();
const redirect = require("../../middleware/redirect");

router.get("/", redirect, (req, res) => {
  res.render("admin/index", { page: "dashboard"});
});

module.exports = router;
