const router = require("express").Router();
const model = require("../../model/home");

router.get("/", async (req, res) => {
	let moreData = await model.getMoreAbout();
	res.render("public/index", { ...moreData } );
});

module.exports = router;
