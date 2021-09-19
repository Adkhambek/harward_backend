const router = require("express").Router();
const model = require("../../model/course");
const multer = require("../../lib/multer");
const breadcrumb = require("../../middleware/breadcrumb");
const fs = require("fs");
const path = require("path");

router.get("/course/add", breadcrumb,  async (req, res) => {
    res.render("admin/courseForm", {
        page: "courseForm",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
    });
});

router.post("/course/add", multer("images/kurslar"),  async(req, res) => {
        await model.addCourse(req.body, req.file.filename);
        req.flash("success", "new course was added successfully");
        res.redirect("/admin/course/add");
    }
);

router.get("/course/table", breadcrumb, async (req, res) => {
    const courses = await model.getCourses();
    res.render("admin/courseTable", {
        courses,
        page: "courseTable",
        successMessage: req.flash("success"),
        breadcrumb: req.breadcrumb,
    });
});

router.get("/course/delete/:id", async (req, res) => {
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

router.get("/course/update/:id", async (req, res) => {
    const courseId = req.params.id * 1;
    const data = await model.getCourse(courseId);
    res.render("admin/courseUpdate", { ...data, successMessage: req.flash("success") });
});

router.post("/course/update/:id", multer("images/kurslar"), async (req, res) => {
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