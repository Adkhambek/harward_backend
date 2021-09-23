const { fetch, fetchAll } = require("../lib/database");

const SELECT_CONTACTS = `
SELECT 
    home_contact_id,
    name,
    number,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM home_contact
WHERE checked = 0
ORDER BY home_contact_id DESC;
`;

const SELECT_CONTACTS_CHECKED = `
SELECT 
    name,
    number,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM home_contact
WHERE checked = 1
ORDER BY home_contact_id DESC;
`;

const CHECK_CONTACT = `
UPDATE home_contact 
SET checked = 1
WHERE home_contact_id = $1;
`;

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

exports.getContacts = () => fetchAll(SELECT_CONTACTS);

exports.getCheckedContacts = () => fetchAll(SELECT_CONTACTS_CHECKED);

exports.checkContact = (id) => fetch(CHECK_CONTACT, id);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);