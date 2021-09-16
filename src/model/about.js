const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT * FROM about
`;

exports.selectAllData = () => fetch(SELECT_ALL);
