const {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
} = require("./userSchema");
const { createProductSchema } = require("./productSchema");
const { createCostumerSchema } = require("./costumerSchema");

module.exports = {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
    createProductSchema,
    createCostumerSchema,
};
