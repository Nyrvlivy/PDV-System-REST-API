const { updateUserSchema } = require("../schemas");

const validateUserUpdate = (payload) => {
    const { error, value } = updateUserSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateUserUpdate;
