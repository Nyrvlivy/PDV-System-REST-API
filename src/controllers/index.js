const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("./users");
const { createProductController } = require("./products");
const {
    createCostumerController,
    getCostumerController,
    getCostumerByIdController
} = require("./costumers");

module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    createProductController,
    createCostumerController,
    getCostumerController,
    getCostumerByIdController
};
