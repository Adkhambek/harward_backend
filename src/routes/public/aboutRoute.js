const router = require("express").Router();
const model = require("../../model/about");

router.get("/about", async (req, res) => {
	let data = await model.getAbout();
	let teacherss = await model.getTeachers();
	let info = await model.getInfo();
    res.render("public/about", { ...data, teacherss, ...info });
});

module.exports = router;