const { updateProductSchema } = require("../schemas");

const validateProductUpdate = (payload) => {
    const { error, value } = updateProductSchema.validate(payload);
    if (error) throw error;
    return value;
};

module.exports = validateProductUpdate;
