const router = require("express").Router();
const model = require("../../model/teacher");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const fs = require("fs");
const path = require("path");

router.get("/teacher/table", redirect, breadcrumb, async (req, res) => {
    const data = await model.allTeachers();
    const course = await model.getCourses();
	const contact = await model.getContacts();
    res.render("admin/teacherTable", {
        teachers: data,
        page: "teacherTable",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
}); 

router.get("/teacher/delete/:id", redirect, async (req, res) => {
    const teacherId = req.params.id * 1;
    const { teacher_image } = await model.getProfileImage(teacherId);
    fs.unlinkSync(
        path.join(process.cwd(), "src/public/images/ustozlar", teacher_image)
    );
    await model.deleteTeacher(teacherId);
    req.flash("success", `the teacher (id = ${teacherId}) successfully deleted`);
    res.redirect("/admin/teacher/table");
});

router.get("/teacher/add", redirect, breadcrumb, async (req, res) => {
    const course = await model.getCourses();
	const contact = await model.getContacts();
    res.render("admin/teacherForm", { 
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
});

router.post("/teacher/add", redirect, multer("images/ustozlar"), async(req, res) => {
    await model.addTeacher(req.body, req.file.filename);
    req.flash("success", "new teacher was added successfully");
    res.redirect("/admin/teacher/add");
    }
);

module.exports = router;
