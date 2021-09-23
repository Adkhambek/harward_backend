const router = require("express").Router();
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const model = require("../../model/quickContact");
const notification = require("../../model/notification");

router.get("/quick-contacts", redirect, breadcrumb, async (req, res) => {
    const contacts = await model.getContacts();
    const checkedContacts = await model.getCheckedContacts();
    const course = await notification.getCourses();
	const contact = await notification.getContacts(); 
    res.render("admin/quickContact", {
        contacts,
        checkedContacts,
        page: "quickContact",
        breadcrumb: req.breadcrumb,
        successMessage: req.flash("success"),
        course,
        contact
    })
});

router.get("/quick-contacts/checked/:id", redirect, async (req, res) => {
    const contactId = req.params.id * 1;
    await model.checkContact(contactId);
    req.flash("success", `the contact (id = ${contactId}) was checked. You can see it below`);
    res.redirect("/admin/quick-contacts");
});

module.exports = router;