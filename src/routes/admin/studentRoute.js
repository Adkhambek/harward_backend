const router = require("express").Router();
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const model = require("../../model/student");

router.get("/students/enrolement", redirect, breadcrumb, async (req, res) => {
    const enrolements = await model.getEnrolement();
    const checkedEnrolements = await model.getCheckedEnrolement();
    res.render("admin/enrolement", {
        enrolements,
        checkedEnrolements,
        page: "enrolement",
        breadcrumb: req.breadcrumb,
        successMessage: req.flash("success"),
    });
});

router.get("/students/enrolement/checked/:id", redirect, async (req, res) => {
    const enrolementId = req.params.id * 1;
    await model.checkEnrolement(enrolementId);
    req.flash("success", `the enrolement (id = ${enrolementId}) was checked. You can see it below`);
    res.redirect("/admin/students/enrolement");
});

module.exports = router;