const InvalidParamError = require("../errors");

const validateUserUpdate = (userData) => {
    const { error, value } = schema.validate(userData);
    if (error) throw error;
    return value;
};

module.exports = validateUserUpdate;
