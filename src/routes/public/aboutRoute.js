const router = require("express").Router();
const model = require("../../model/about");

router.get("/about", async (req, res) => {
	let data = await model.getAbout();
    res.render("public/about", { ...data });
});

module.exports = router;