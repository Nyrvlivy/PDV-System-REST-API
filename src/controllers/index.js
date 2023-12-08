const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("./users");
const {
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
} = require("./products");
const {
    createCustomerController,
    getAllCustomersController,
    getCustomerByIdController,
    updateCustomerController,
} = require("./customers");
const { createOrderController } = require("./orders");
module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
    createCustomerController,
    getAllCustomersController,
    getCustomerByIdController,
    updateCustomerController,
    createOrderController,
};
