const router = require("express").Router();
const model = require("../../model/about");

router.get("/about", async (req, res) => {
	let data = await model.getAbout();
	let teacherss = await model.getTeachers();
    res.render("public/about", { ...data, teacherss });
});

module.exports = router;