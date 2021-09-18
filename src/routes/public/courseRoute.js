const router = require("express").Router();
const model = require("../../model/course");

router.get("/kurslar", async (req, res) => {
	let courses = await model.getCourses();
	res.render("public/kurslar", { courses });
});

router.get("/lesson/:id", async (req, res) => {
	let course = await model.getCourse(req.params.id);
	res.render("public/lesson", { ...course });
});

router.post("/lesson/:id", async (req, res) => {
	await model.inserData(req.body);
	res.redirect("/lesson/" + req.params.id);
})

module.exports = router;