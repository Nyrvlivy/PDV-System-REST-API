const { updateCustomerSchema } = require("../schemas");

const validateCustomerUpdate = (id, payload) => {
    const { error, value } = updateCustomerSchema.validate(id, payload);
    if (error) throw error;
    return value;
};

module.exports = validateCustomerUpdate;
