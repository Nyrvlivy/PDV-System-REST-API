const { getAllCategoriesController } = require("./categories");
const detailingUserLoggedController = require("./detailing");
const { loginUserController } = require("./login")

module.exports = {
    getAllCategoriesController,
    loginUserController,
    detailingUserLoggedController,
};
