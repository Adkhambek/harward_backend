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

exports.checkLogin =  (username, password) => fetch(CHECK_LOGIN, username, password); 

exports.changePassword = ( newPassword ) => fetch(CHANGE_PASSWORD, newPassword);

exports.oldPassword = (password) => fetch(OLD_PASSWORD, password)
