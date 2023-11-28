const { userSchema } = require("../schemas");

const validateUserCreate = (payload) => {
    const { error, value } = userSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateUserCreate;
