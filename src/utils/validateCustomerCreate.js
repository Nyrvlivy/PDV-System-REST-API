const { createCustomerSchema } = require("../schemas");

const validateCustomerCreate = (payload) => {
    const { error, value } = createCustomerSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateCustomerCreate;
