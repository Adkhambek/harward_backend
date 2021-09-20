const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

module.exports = {
    sign: (playload) => jwt.sign(playload, secretKey),
    verify: (token) => jwt.verify(token, secretKey)
} 