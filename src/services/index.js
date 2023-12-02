const { getAllCategoriesService } = require("./categories");
const { loginUserService } = require("./login");
const {
    createUserService,
    getUserProfileService,
    updateUserService,
} = require("./users");
const { createProductService, updateProductService } = require("./products");
const {
    createCostumerService,
    getAllCostumersService,
    getCostumerByIdService,
} = require("./costumers");

module.exports = {
    getAllCategoriesService,
    loginUserService,
    createUserService,
    getUserProfileService,
    updateUserService,
    createProductService,
    updateProductService,
    createCostumerService,
    getAllCostumersService,
    getCostumerByIdService,
};
