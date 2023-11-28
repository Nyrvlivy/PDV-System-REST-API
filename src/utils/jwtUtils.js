const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtExpired } = require("../configs/auth");

const generateToken = (payload) => {
    return jwt.sign(payload, jwtSecretKey, { expiresIn: jwtExpired });
};

module.exports = generateToken;
