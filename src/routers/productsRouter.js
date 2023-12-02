const { Router } = require("express");
const productsRouter = Router();
const { updateProductsController } = require("../controllers");

productsRouter.put("/:id", updateProductsController.handle);

module.exports = productsRouter;
