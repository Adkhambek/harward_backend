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

exports.getEnrolement = () => fetchAll(SELECT_ENROLEMENTS);

exports.getCheckedEnrolement = () => fetchAll(SELECT_ENROLEMENTS_CHECKED);

exports.checkEnrolement = (id) => fetch(CHECK_ENROLEMENTS, id);