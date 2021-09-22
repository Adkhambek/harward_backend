const router = require("express").Router();
const model = require("../../model/news");

router.get("/news", async (req, res) => {
	const news = await model.getNews();
	const info = await model.getInfo();
	res.render("public/news", { news, info });
});

router.get("/news/:id", async (req, res) => {
	const latestSeven = await model.getSevenLatest();
	const latestFour = await model.getFourLatest();
	const data = await model.getOneNews(req.params.id);
	const info = await model.getInfo();
	res.render("public/text", { ...data, latestSeven, latestFour, info });
});

module.exports = router;