const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL_TEACHERS = `
SELECT
    teacher_id,
    teacher_first_name,
    teacher_last_name
FROM teachers;
`;

const DELETE_TEACHER = `
DELETE FROM teachers
WHERE teacher_id = $1;
`;

exports.allTeachers = () => fetchAll(SELECT_ALL_TEACHERS);
exports.deleteTeacher = (id) => fetch(DELETE_TEACHER, id);
