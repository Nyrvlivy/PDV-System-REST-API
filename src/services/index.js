const { getAllCategoriesService } = require("./categories");
const { loginUserService } = require("./login");
const {
    createUserService,
    getUserProfileService,
    updateUserService,
} = require("./users");
const { createProductService } = require("./products");
const { createCostumerService } = require("./costumers");

module.exports = {
    getAllCategoriesService,
    loginUserService,
    createUserService,
    getUserProfileService,
    updateUserService,
    createProductService,
    createCostumerService,
};
