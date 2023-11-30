const { createProductSchema } = require("../schemas");

const validateProductCreate = (payload) => {
    const { error, value } = createProductSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateProductCreate;
