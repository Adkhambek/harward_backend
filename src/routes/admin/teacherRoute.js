const router = require("express").Router();
const model = require("../../model/teacher");

router.get("/teacher/table", async (req, res) => {
  const data = await model.allTeachers();
  res.render("admin/teacherTable", { teachers: data, page: "teacherTable" });
});

router.get("/teacher/:id", async (req, res) => {
  const teacherId = req.params.id * 1;
  await model.deleteTeacher(teacherId);
  res.redirect("/admin/teacher/table");
});

module.exports = router;
