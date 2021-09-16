const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT * FROM about
`;

const UPDATE = `
UPDATE about
SET body = $1, students = $2, teachers = $3, exprience = $4, vidoe = $5
`

const SELECT_TEACHERS = `
SELECT 
    teacher_image,
    teacher_first_name || ' ' || teacher_last_name teacher_name,
    teacher_detail
FROM teachers;
`

exports.selectAllData = () => fetch(SELECT_ALL);

exports.updateAbout = (data, videoName) => fetch(UPDATE, 
    data.body, 
    data.student, 
    data.teacher,
    data.experience,
    videoName
    )

exports.getAbout = () => fetch(SELECT_ALL);

exports.getTeachers = () => fetchAll(SELECT_TEACHERS)
