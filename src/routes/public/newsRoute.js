const router = require("express").Router();
const model = require("../../model/news");

router.get("/news", async (req, res) => {
	let news = await model.getNews();
	let info = await model.getInfo();
	res.render("public/news", { news, info });
});

router.get("/news/:id", async (req, res) => {
	let latestSeven = await model.getSevenLatest();
	let latestFour = await model.getFourLatest();
	let data = await model.getOneNews(req.params.id);
	let info = await model.getInfo();
	res.render("public/text", { ...data, latestSeven, latestFour, info }); 
})

module.exports = router;