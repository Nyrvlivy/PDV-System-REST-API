const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("./users");
const {
    createProductController,
    updateProductController,
} = require("./products");
const {
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
} = require("./costumers");

module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    createProductController,
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
    updateProductController,
};
