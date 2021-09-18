const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL_TEACHERS = `
SELECT
    teacher_id,
    teacher_first_name,
    teacher_last_name
FROM teachers
ORDER BY teacher_id desc;
`;

const SELECT_PROFILE_IMAGE = `
SELECT
    teacher_image
FROM teachers
WHERE teacher_id = $1;
`;

const DELETE_TEACHER = `
DELETE FROM teachers
WHERE teacher_id = $1; 
`;

const INSERT_TEACHER = `
INSERT INTO teachers(
    teacher_first_name,
    teacher_last_name,
    teacher_detail,
    teacher_image
) VALUES ($1, $2, $3, $4)
`;

exports.allTeachers = () => fetchAll(SELECT_ALL_TEACHERS);
exports.getProfileImage = (id) => fetch(SELECT_PROFILE_IMAGE, id);
exports.deleteTeacher = (id) => fetch(DELETE_TEACHER, id);
exports.addTeacher = (data, imageName) =>
    fetch(
        INSERT_TEACHER,
        data.firstname,
        data.lastname,
        data.detail,
        imageName
    );
