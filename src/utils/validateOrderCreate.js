const { createOrderSchema } = require("../schemas");

const validateOrderCreate = (payload) => {
    const { error, value } = createOrderSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateOrderCreate;
