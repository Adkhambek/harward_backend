const { fetch, fetchAll } = require("../lib/database");

const SELECT_MORE_ABOUT = `SELECT * FROM more_about;`

const SELECT_INFO = `
SELECT * FROM info;
`

exports.getMoreAbout = () => fetch(SELECT_MORE_ABOUT);

exports.getInfo = () => fetch(SELECT_INFO);