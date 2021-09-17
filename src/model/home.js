const { fetch, fetchAll } = require("../lib/database");

const SELECT_MORE_ABOUT = `SELECT * FROM more_about;`

exports.getMoreAbout = () => fetch(SELECT_MORE_ABOUT);