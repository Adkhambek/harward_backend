const router = require("express").Router();
const breadcrumb = require("../../middleware/breadcrumb");
const model = require("../../model/contact");

router.get("/contacts", breadcrumb, async (req, res) => {
    const contacts = await model.getContacts();
    const checkedContacts = await model.getCheckedContacts();
    res.render("admin/contact", {
        contacts,
        checkedContacts,
        page: "contact",
        breadcrumb: req.breadcrumb,
        successMessage: req.flash("success"),
    })
});

router.get("/contacts/checked/:id", async (req, res) => {
    const contactId = req.params.id * 1;
    await model.checkContact(contactId);
    req.flash("success", `the contact (id = ${contactId}) was checked. You can see it below`);
    res.redirect("/admin/contacts");
});

module.exports = router