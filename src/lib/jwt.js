const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

module.exports = {
    sign: (playload) => jwt.sign(playload, secretKey, { expiresIn: "24h" }),
    verify: (token) => jwt.verify(token, secretKey)
} 