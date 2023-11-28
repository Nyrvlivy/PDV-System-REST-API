const { getAllCategoriesController } = require("./categories");
const { loginUserController } = require("./login");
const { getUserProfileController, updateUserController } = require("./users");

module.exports = {
    getAllCategoriesController,
    loginUserController,
    getUserProfileController,
    updateUserController,
};
