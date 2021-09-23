const router = require("express").Router();
const model = require("../../model/info");
const notification = require("../../model/notification");
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");

router.get("/info", redirect, breadcrumb, async (req, res) => {
	const data = await model.selectAllData();
	const course = await notification.getCourses();
	const contact = await notification.getContacts();
	res.render("admin/info", { 
		...data, 
		successMessage: req.flash("success"),
		breadcrumb: req.breadcrumb,
		course,
		contact
	});
});

router.post("/info", redirect, async (req, res) => {
    await model.updateInfo(req.body);
    req.flash("success", "info was updated successfully!");
    res.redirect("/admin/info");
});

module.exports = router;