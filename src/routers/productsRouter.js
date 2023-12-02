const { Router } = require("express");
const {
    deleteProductByIdController,
    getProductByIdController
} = require("../controllers");
const productsRouter = Router();

productsRouter.get("/:id", getProductByIdController.handle);
productsRouter.delete("/produto/:id", deleteProductByIdController.handle);

module.exports = productsRouter;