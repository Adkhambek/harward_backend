const router = require("express").Router();
const model = require("../../model/about");

router.get("/about", async (req, res) => {
	const data = await model.getAbout();
	const teacherInfo = await model.getTeachers();
	const info = await model.getInfo();
    res.render("public/about", { ...data, teacherInfo, info });
});

module.exports = router;