const router = require("express").Router();
const model = require("../../model/contact");

router.get("/aloqa", async (req, res) => {
	const info = await model.getInfo();
  	res.render("public/aloqa", { info });
});

router.post("/aloqa", async (req, res) => {
	await model.inserData(req.body);
	res.redirect("/aloqa");
})

module.exports = router;