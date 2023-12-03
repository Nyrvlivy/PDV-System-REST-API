const { Router } = require("express");
const {
    deleteProductByIdController,
    getProductByIdController,
    getProductController,
} = require("../controllers");
const productsRouter = Router();

productsRouter.get("/produto", getProductController.handle);
productsRouter.get("/:id", getProductByIdController.handle);
productsRouter.delete("/produto/:id", deleteProductByIdController.handle);

module.exports = productsRouter;