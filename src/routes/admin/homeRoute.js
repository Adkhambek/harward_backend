const router = require("express").Router();
const redirect = require("../../middleware/redirect");
const notification = require("../../model/notification");

router.get("/", redirect, async (req, res) => {
	const course = await notification.getCourses();
	const contact = await notification.getContacts();
	res.render("admin/index", { page: "dashboard", course, contact});
});

module.exports = router;
