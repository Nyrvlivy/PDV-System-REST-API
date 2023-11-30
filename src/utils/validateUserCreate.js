const { createUserSchema } = require("../schemas");

const validateUserCreate = (payload) => {
    const { error, value } = createUserSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateUserCreate;
