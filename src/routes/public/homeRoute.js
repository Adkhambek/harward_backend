const router = require("express").Router();
const model = require("../../model/home"); 
const {truncation, cleanText} = require("../../lib/textFormat");
router.get("/", async (req, res) => {
	const moreData = await model.getAbout();
	const info = await model.getInfo(); 
	let news = await model.getNews();
	news = news.map(e => Object.assign(e, {body: truncation(cleanText( e.body), 150)}));
	const courses = await model.getCourses();
	const comments = await model.getComments();
	res.render("public/index", { 
		...moreData, 
		info, 
		news, 
		courses, 
		comments,
		successMessage: req.flash("success"),
		errorMessage: req.flash("error"),
	});
});

router.post("/", async (req, res) => {
	const name = req.body.name
	const tel = req.body.number
	if(!name || !tel) {
		req.flash("error", "bo'sh qator bor. Iltimos formani to'liq to'ldiring!");
		res.redirect("/");
	} else {
		await model.insertData(req.body);
		req.flash("success", "muvaffaqiyatli jo'natildi");
		res.redirect("/");
	}
	
});

module.exports = router;
