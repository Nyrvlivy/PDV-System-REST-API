const { getAllCategoriesService } = require("./categories");
const { loginUserService } = require("./login");
const {
    createUserService,
    getUserProfileService,
    updateUserService,
} = require("./users");
const { createProductService } = require("./products");
const { createCostumerService, getCostumerByIdService, getCostumerService } = require("./costumers");

module.exports = {
    getAllCategoriesService,
    loginUserService,
    createUserService,
    getUserProfileService,
    updateUserService,
    createProductService,
    createCostumerService,
    getCostumerByIdService,
    getCostumerService
};
