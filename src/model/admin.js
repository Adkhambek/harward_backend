const { fetch, fetchAll } = require("../lib/database");

const CHECK_LOGIN = `
SELECT username
FROM admin
WHERE username = $1 AND password = crypt($2, password)
;`;

const CHANGE_PASSWORD = `
UPDATE admin
    SET password = crypt($2, gen_salt('bf'))
WHERE password = crypt($1, gen_salt('bf'));
`;

exports.checkLogin =  (username, password) => fetch(CHECK_LOGIN, username, password); 

exports.changePassword = ({ oldPassword, newPassword }) => fetch(CHANGE_PASSWORD, oldPassword, newPassword);
