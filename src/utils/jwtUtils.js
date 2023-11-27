const jwt = require('jsonwebtoken');
const { jwtSecretKey, jwtExpired } = require('../configs/auth');

const generateToken = (data) => {
    return jwt.sign(data, jwtSecretKey, { expiresIn: jwtExpired })
}

module.exports = generateToken;