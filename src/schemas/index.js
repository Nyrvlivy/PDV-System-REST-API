const {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
} = require("./userSchema");
const { createProductSchema, updateProductSchema } = require("./productSchema");
const {
    createCustomerSchema,
    updateCustomerSchema,
} = require("./customerSchema");
const { createOrderSchema } = require("./orderSchema");

module.exports = {
    loginUserSchema,
    createUserSchema,
    updateUserSchema,
    createProductSchema,
    updateProductSchema,
    createCustomerSchema,
    updateCustomerSchema,
    createOrderSchema,
};
