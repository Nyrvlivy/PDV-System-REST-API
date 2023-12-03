const { getAllCategoriesService } = require("./categories");
const { loginUserService } = require("./login");
const {
    createUserService,
    getUserProfileService,
    updateUserService,
} = require("./users");
const {
    deleteProductByIdService,
    getProductsService,
} = require("./products");

module.exports = {
    getAllCategoriesService,
    loginUserService,
    createUserService,
    getUserProfileService,
    updateUserService,
    deleteProductByIdService,
    getProductsService,
};