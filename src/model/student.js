const { fetch, fetchAll } = require("../lib/database");

const SELECT_ENROLEMENTS = `
SELECT 
    id,
    title,
    e.name,
    e.number,
    TO_CHAR(e.time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 0
ORDER BY e.course_id DESC;
`;

const SELECT_ENROLEMENTS_CHECKED = `
SELECT
    id,
    title,
    e.name,
    e.number,
    TO_CHAR(e.time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 1
ORDER BY e.course_id DESC;
`;

const CHECK_ENROLEMENTS = `
UPDATE enrolements
SET checked = 1
WHERE id = $1;
`;

const INSERT_COMMENT = `
INSERT INTO student_comments (
    student_first_name,
    student_last_name,
    job,
    age,
    comment,
    image
) VALUES ($1, $2, $3, $4, $5, $6);
`

const SELECT_COURSES = `
SELECT 
    title,
    e.name,
    e.number
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 0
LIMIT 2;;
`;

const SELECT_CONTACT = `
SELECT 
    name,
    number
FROM home_contact
WHERE checked = 0
LIMIT 2;
`;

exports.getEnrolement = () => fetchAll(SELECT_ENROLEMENTS);

exports.getCheckedEnrolement = () => fetchAll(SELECT_ENROLEMENTS_CHECKED);

exports.checkEnrolement = (id) => fetch(CHECK_ENROLEMENTS, id);

exports.addComments = (data, imageName) => fetch(INSERT_COMMENT, data.firstname, data.lastname, data.job, data.age, data.comment, imageName);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);