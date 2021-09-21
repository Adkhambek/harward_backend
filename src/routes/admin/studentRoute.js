const router = require("express").Router();
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const model = require("../../model/student");
const multer = require("../../lib/multer");

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

router.get("/students/comments", redirect, breadcrumb,  async (req, res) => {
    res.render("admin/comment", {
        page: "comments",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
    });
});

router.post("/students/comments", redirect, multer("images/oquvchilar"),  async(req, res) => {
        await model.addComments(req.body, req.file.filename);
        req.flash("success", "new comment was added successfully");
        res.redirect("/admin/students/comments");
    }
);

module.exports = router;