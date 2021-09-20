const { fetch, fetchAll } = require("../lib/database");

const CHECK_LOGIN = `
SELECT username
FROM admin
WHERE username = $1 AND password = crypt($2, password)
;`;

exports.checkLogin =  (username, password) => fetch(CHECK_LOGIN, username, password); 

