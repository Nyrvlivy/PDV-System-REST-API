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
    getProductByIdController,
    updateProductController,
    deleteProductController,
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
    updateCostumerController,
};
