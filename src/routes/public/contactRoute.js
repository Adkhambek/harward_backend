const router = require("express").Router();
const model = require("../../model/contact");

router.get("/aloqa", async (req, res) => {
	let info = await model.getInfo();
  res.render("public/aloqa", { info });
});

module.exports = router;