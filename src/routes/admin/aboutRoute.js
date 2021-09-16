const router = require("express").Router();
const model = require("../../model/about");
const uploadVideo = require("../../lib/multer");

router.get("/about", async (req, res) => {
	const data = await model.selectAllData();
	res.render("admin/about", { ...data });
});

router.post("/about", uploadVideo.single("video"), async (req, res) => {
	if(req.file) {
		let data = await model.updateAbout(req.body, req.file.filename);
		res.redirect('/admin/about');
	} else {
		
	}
});

module.exports = router;
