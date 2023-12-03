const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("./users");
const {
    deleteProductByIdController,
    getProductController,
} = require("./products");

module.exports = {
    getAllCategoriesController,
    loginUserController,
    createUserController,
    getUserProfileController,
    updateUserController,
    deleteProductByIdController,
    getProductController,
};
