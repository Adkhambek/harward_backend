const router = require("express").Router();
const model = require("../../model/course");
const notification = require("../../model/notification");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const redirect = require("../../middleware/redirect");
const fs = require("fs");
const path = require("path");

router.get("/course/add", redirect, breadcrumb,  async (req, res) => {
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    res.render("admin/courseForm", {
        page: "courseForm",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
});

router.post("/course/add", redirect, multer("images/kurslar"),  async(req, res) => {
        await model.addCourse(req.body, req.file.filename);
        req.flash("success", "new course was added successfully");
        res.redirect("/admin/course/add");
    }
);

router.get("/course/table", redirect, breadcrumb, async (req, res) => {
    const courses = await model.getCourseList();
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    res.render("admin/courseTable", {
        courses,
        page: "courseTable",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
        course,
        contact
    });
});

router.get("/course/delete/:id", redirect, async (req, res) => {
    const courseId = req.params.id * 1;
    const { image } = await model.getImage(courseId);
    fs.unlinkSync(
        path.join(process.cwd(), "src/public/images/kurslar", image)
    );
    await model.deleteCourse(courseId);
    req.flash(
        "success",
        `the course (id = ${courseId}) was successfully deleted`
    );
    res.redirect("/admin/course/table");
});

router.get("/course/update/:id", redirect, async (req, res) => {
    const courseId = req.params.id * 1;
    const course = await notification.getCourses();
	const contact = await notification.getContacts();
    const data = await model.getCourse(courseId);
    res.render("admin/courseUpdate", { ...data, successMessage: req.flash("success"), course, contact });
});

router.post("/course/update/:id", redirect, multer("images/kurslar"), async (req, res) => {
    const courseId = req.params.id * 1;
    if (req.file) {
        const { image } = await model.getImage(courseId);
        fs.unlinkSync(
            path.join(process.cwd(), "src/public/images/kurslar", image)
        );
        await model.updateCourse(courseId, req.body, req.file.filename);
        req.flash("success", `the course (id = ${courseId}) updated successfully`);
        res.redirect("/admin/course/table");
      } else {
        await model.updateWithoutImage(courseId, req.body);
        req.flash("success", `the course (id = ${courseId}) updated successfully`);
        res.redirect("/admin/course/table");
      }
    
});

module.exports = router 