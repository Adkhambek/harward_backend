const router = require("express").Router();
const model = require("../../model/home");

router.get("/", async (req, res) => {
	let moreData = await model.getMoreAbout();
	let info = await model.getInfo();
	let news = await model.getNews();
	let courses = await model.getCourses();
	let comments = await model.getComments();
	res.render("public/index", { ...moreData, info, news, courses, comments } );
});

router.post("/birnima", async (req, res) => {
	await model.insertData(req.body);
	res.redirect("/")
})

module.exports = router;
