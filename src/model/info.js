const { fetch } = require("../lib/database");

const SELECT_INFO = `SELECT * FROM info;`;

exports.getInfo = () => fetch(SELECT_INFO);
