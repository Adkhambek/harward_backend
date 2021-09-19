const router = require("express").Router();
const model = require("../../model/course");

router.get("/kurslar", async (req, res) => {
	let courses = await model.getCourses();
	let info = await model.getInfo();
	res.render("public/kurslar", { courses, info });
});

router.get("/lesson/:id", async (req, res) => {
	let course = await model.getCourse(req.params.id);
	let info = await model.getInfo();
	res.render("public/lesson", { ...course, info });
});

router.post("/lesson/:id", async (req, res) => {
	await model.inserData(req.body);
	res.redirect("/lesson/" + req.params.id);
})

module.exports = router;