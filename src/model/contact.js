const { fetch, fetchAll } = require("../lib/database");

const SELECT_INFO = `
SELECT * FROM info;
`

const INSERT_DATA = `
INSERT INTO contact (
    name,
    number,
    body
) VALUES 
( $1, $2, $3)
RETURNING contact_id;
`

exports.getInfo = () => fetch(SELECT_INFO);

exports.inserData = ({ name, phones, text }) => fetch(INSERT_DATA, name, phones, text);