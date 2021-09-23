const { fetch } = require("../lib/database");

const SELECT_ALL = `SELECT * FROM info;`;

const UPDATE_INFO = `
UPDATE info
SET mail = $1,
    number1 = $2,
    number2 = $3,
    address = $4;
`

exports.selectAllData = () => fetch(SELECT_ALL);
exports.getInfo = () => fetch(SELECT_ALL);
exports.updateInfo = (data) => fetch(UPDATE_INFO, data.email, data.number1, data.number2, data.address)
