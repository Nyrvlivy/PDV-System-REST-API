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
} = require("./products");
const {
    createCostumerService,
    getAllCostumersService,
    getCostumerByIdService,
    updateCostumerService,
} = require("./costumers");

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
    createCostumerService,
    getAllCostumersService,
    getCostumerByIdService,
    updateCostumerService,
};
