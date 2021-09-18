const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT 
    course_id,
    image,
    name,
    teacher,
    prise
FROM courses;
`

const SELECT_ONE = `
SELECT 
    image,
    title,
    body,
    teacher,
    counts,
    prise
FROM courses
WHERE course_id = $1;
`

exports.getCourses = () => fetchAll(SELECT_ALL);

exports.getCourse = (id) => fetch(SELECT_ONE, id);