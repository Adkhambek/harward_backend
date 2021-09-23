const { fetch, fetchAll } = require("../lib/database");

const CHECK_LOGIN = `
SELECT username
FROM admin
WHERE username = $1 AND password = crypt($2, password)
;`;

const OLD_PASSWORD = `
SELECT password FROM admin
WHERE password = crypt($1, password);
` 

const CHANGE_PASSWORD = `
UPDATE admin
    SET password = crypt($1, password);
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

exports.checkLogin =  (username, password) => fetch(CHECK_LOGIN, username, password); 

exports.changePassword = ( newPassword ) => fetch(CHANGE_PASSWORD, newPassword);

exports.oldPassword = (password) => fetch(OLD_PASSWORD, password);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);
