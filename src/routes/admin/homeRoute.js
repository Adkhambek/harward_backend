const router = require("express").Router();
const redirect = require("../../middleware/redirect");
const model = require("../../model/homeAdmin");

router.get("/", redirect, async (req, res) => {
	const course = await model.getCourses();
	const contact = await model.getContacts();
	res.render("admin/index", { page: "dashboard", course, contact});
});

module.exports = router;
