const { Router } = require("express");
const productsRouter = Router();
const {
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
} = require("../controllers");
const { authToken } = require("../middlewares");

productsRouter.use(authToken);
productsRouter.post("/", createProductController.handle);
productsRouter.get("/", getAllProductsController.handle);
productsRouter.get("/:id", getProductByIdController.handle);
productsRouter.put("/:id", updateProductController.handle);

module.exports = productsRouter;
