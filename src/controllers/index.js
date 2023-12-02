const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const { updateProductsController } = require("./products");
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("./users");

module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    updateProductsController
};
