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
    updateProductController,
} = require("./products");
const {
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
    updateCostumerController,
} = require("./costumers");
module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    createProductController,
    getAllProductsController,
    updateProductController,
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
    updateCostumerController,
};
