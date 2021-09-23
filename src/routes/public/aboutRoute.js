const router = require("express").Router();
const model = require("../../model/about");
const infoModel = require("../../model/info");

router.get("/about", async (req, res) => {
	const data = await model.getAbout();
	const teacherInfo = await model.getTeachers();
	const info = await infoModel.getInfo();
    res.render("public/about", { 
		...data, 
		teacherInfo, 
		info,
		section: "about"
	});
});

module.exports = router;