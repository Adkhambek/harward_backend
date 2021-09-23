const { fetchAll } = require("../lib/database");

const SELECT_COURSES = `
SELECT 
    id,
    title,
    e.name,
    e.number
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 0
ORDER BY id DESC
LIMIT 2;
`;

const SELECT_CONTACT = `
SELECT 
    home_contact_id as id,
    name,
    number
FROM home_contact
WHERE checked = 0
ORDER BY home_contact_id DESC
LIMIT 2;
`;

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);