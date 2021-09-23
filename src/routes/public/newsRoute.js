const router = require("express").Router();
const model = require("../../model/news");
const limit = require("../../config/keys").pageLimit

router.get("/news", async (req, res) => {
	const { count } = await model.countNews();
	const totalPages = Math.ceil(count / limit);
	const news = await model.getNews();
	const info = await model.getInfo();
	res.render("public/news", { 
		news,
		pages: totalPages,
		page: 1, 
		info, 
		section: "news" 
	});
});

router.get("/news/page/:num", async (req, res) => {
	const pageNumber = req.params.num * 1
	const { count } = await model.countNews();
	const totalPages = Math.ceil(count / limit);
	const info = await model.getInfo();
	
	if(pageNumber === 0 || pageNumber > totalPages) {
		res.render("404.ejs");
	} else {
		res.render("public/news", { 
			news: await model.pagination((pageNumber - 1) * limit, limit), 
			info,
			pages: totalPages,
			page: pageNumber,
			section: "pagination",
		});
	}

})

router.get("/news/:id", async (req, res) => {
	const latestSeven = await model.getSevenLatest();
	const latestFour = await model.getFourLatest();
	const data = await model.getOneNews(req.params.id);
	const info = await model.getInfo();
	res.render("public/text", { ...data, latestSeven, latestFour, info });
});

module.exports = router;