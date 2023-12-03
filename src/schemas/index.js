const {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
} = require("./userSchema");
const { createProductSchema, updateProductSchema } = require("./productSchema");
const { createCostumerSchema, updateCostumerSchema } = require("./costumerSchema");

module.exports = {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
    createProductSchema,
    updateProductSchema,
    createCostumerSchema,
    updateCostumerSchema,
};
