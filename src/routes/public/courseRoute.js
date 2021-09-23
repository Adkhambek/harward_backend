const router = require("express").Router();
const model = require("../../model/course");

router.get("/kurslar", async (req, res) => {
	const courses = await model.getCourseList();
	const info = await model.getInfo();
	res.render("public/kurslar", { courses, info });
});

router.get("/kurslar/:id", async (req, res) => {
	const course = await model.getCourse(req.params.id);
	const info = await model.getInfo();
	res.render("public/lesson", { 
		...course, 
		info,
		successMessage: req.flash("success"),
		errorMessage: req.flash("error") 
	});
});

router.post("/kurslar/:id", async (req, res) => {
	const name = req.body.name;
	const tel = req.body.phones;
	const courseId = req.params.id;
	if(!name || !tel) {
		req.flash("error", "bo'sh qator bor. Iltimos formani to'liq to'ldiring!");
		res.redirect("/kurslar/" + courseId);	
	} else {
		await model.inserData(req.body, courseId);
		req.flash("success", "Sizning so'rovingiz adminga yuborildi, qo'ng'iroqni kuting.");
		res.redirect("/kurslar/" + courseId);
	}
	
})

module.exports = router;