const { createCostumerSchema } = require("../schemas");

const validateCostumerCreate = (payload) => {
    const { error, value } = createCostumerSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateCostumerCreate;
