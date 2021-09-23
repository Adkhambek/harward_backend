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

exports.getContacts = () => fetchAll(SELECT_CONTACTS);

exports.getCheckedContacts = () => fetchAll(SELECT_CONTACTS_CHECKED);

exports.checkContact = (id) => fetch(CHECK_CONTACT, id); 