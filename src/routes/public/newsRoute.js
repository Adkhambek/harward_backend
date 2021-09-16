const router = require("express").Router();
const model = require("../../model/news");

router.get("/news", async (req, res) => {
  let news = await model.getNews();
  res.render("public/news", { news });
});

router.get("/text", async (req, res) => {
  let data = await model.getOneNews(req.query.id);
  console.log(data)
  res.render("public/text", { ...data });
})

module.exports = router;