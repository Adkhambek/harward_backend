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
    course_id,
    image,
    title,
    body,
    teacher,
    counts,
    prise
FROM courses
WHERE course_id = $1;
`

const INSERT_DATA = `
INSERT INTO contact(
    name,
    number,
    body
) VALUES 
( $1, $2, $3)
RETURNING contact_id;
`

exports.getCourses = () => fetchAll(SELECT_ALL);

exports.getCourse = (id) => fetch(SELECT_ONE, id);

exports.inserData = ({ name, phones, text }) => fetch(INSERT_DATA, name, phones, text);