const { updateCostumerSchema } = require("../schemas");

const validateCostumerUpdate = (id, payload) => {
    const { error, value } = updateCostumerSchema.validate(id, payload);
    if (error) throw error;
    return value;
};

module.exports = validateCostumerUpdate;
