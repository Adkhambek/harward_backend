const router = require("express").Router();
const model = require("../../model/home");

router.get("/", async (req, res) => {
	let moreData = await model.getMoreAbout();
	let info = await model.getInfo();
	res.render("public/index", { ...moreData, info } );
});

module.exports = router;
