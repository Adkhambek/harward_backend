const router = require("express").Router();
const model = require("../../model/course");

router.get("/kurslar", async (req, res) => {
	const courses = await model.getCourses();
	const info = await model.getInfo();
	res.render("public/kurslar", { courses, info });
});

router.get("/lesson/:id", async (req, res) => {
	const course = await model.getCourse(req.params.id);
	const info = await model.getInfo();
	res.render("public/lesson", { ...course, info });
});

router.post("/lesson/:id", async (req, res) => {
	await model.inserData(req.body, req.params.id);
	res.redirect("/lesson/" + req.params.id);
})

module.exports = router;