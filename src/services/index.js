const { getAllCategoriesService } = require("./categories");
const { loginUserService } = require("./login");
const {
    createUserService,
    getUserProfileService,
    updateUserService,
} = require("./users");
const {
    createProductService,
    getAllProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
} = require("./products");
const {
    createCustomerService,
    getAllCustomersService,
    getCustomerByIdService,
    updateCustomerService,
} = require("./customers");
const { createOrderService, getOrdersServices } = require("./orders");

module.exports = {
    getAllCategoriesService,
    loginUserService,
    createUserService,
    getUserProfileService,
    updateUserService,
    createProductService,
    getAllProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
    createCustomerService,
    getAllCustomersService,
    getCustomerByIdService,
    updateCustomerService,
    createOrderService,
    getOrdersServices,
};
