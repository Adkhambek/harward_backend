const router = require("express").Router();
const breadcrumb = require("../../middleware/breadcrumb");
const model = require("../../model/contact");
const redirect = require("../../middleware/redirect");

router.get("/contacts", redirect, breadcrumb, async (req, res) => {
    const contacts = await model.getContacts();
    const checkedContacts = await model.getCheckedContacts();
    const contactDetail = await model.getContactDetails();
    const course = await model.getCourses();
	const contact = await model.getContacts();
    res.render("admin/contact", {
        contacts,
        checkedContacts,
        contactDetail,
        page: "contact",
        breadcrumb: req.breadcrumb,
        successMessage: req.flash("success"),
        course,
        contact
    })
});

router.get("/contacts/checked/:id", redirect, async (req, res) => {
    const contactId = req.params.id * 1;
    await model.checkContact(contactId);
    req.flash("success", `the contact (id = ${contactId}) was checked. You can see it below`);
    res.redirect("/admin/contacts");
});

module.exports = router