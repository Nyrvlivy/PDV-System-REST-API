const {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
} = require("./userSchema");
const { createProductSchema, updateProductSchema } = require("./productSchema");
const { createCostumerSchema } = require("./costumerSchema");

module.exports = {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
    createProductSchema,
    updateProductSchema,
    createCostumerSchema,
};
