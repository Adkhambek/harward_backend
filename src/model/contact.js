const { fetch, fetchAll } = require("../lib/database");

const SELECT_INFO = `
SELECT * FROM info;
`;

const INSERT_DATA = `
INSERT INTO contact (
    name,
    number,
    body
) VALUES 
( $1, $2, $3)
RETURNING contact_id;
`;

const SELECT_CONTACTS = `
SELECT 
    contact_id,
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact
WHERE checked = 0
ORDER BY contact_id DESC;
`;

const SELECT_CONTACTS_CHECKED = `
SELECT 
    contact_id,
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact
WHERE checked = 1
ORDER BY contact_id DESC;
`;

const CHECK_CONTACT = `
UPDATE contact 
SET checked = 1
WHERE contact_id = $1;
`;

exports.getInfo = () => fetch(SELECT_INFO);

exports.getContacts = () => fetchAll(SELECT_CONTACTS);

exports.getCheckedContacts = () => fetchAll(SELECT_CONTACTS_CHECKED);

exports.inserData = ({ name, phones, text }) => fetch(INSERT_DATA, name, phones, text);

exports.checkContact = (id) => fetch(CHECK_CONTACT, id);