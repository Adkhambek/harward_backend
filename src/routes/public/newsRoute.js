const router = require("express").Router();
const model = require("../../model/news");

router.get("/news", async (req, res) => {
	let news = await model.getNews();
	res.render("public/news", { news });
});

router.get("/news/:id", async (req, res) => {
	let latestSeven = await model.getSevenLatest();
	let latestFour = await model.getFourLatest();
	let data = await model.getOneNews(req.params.id);
	res.render("public/text", { ...data, latestSeven, latestFour }); 
})

module.exports = router;