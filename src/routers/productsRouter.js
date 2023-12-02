const { Router } = require("express");
const { deleteProductByIdController } = require("../controllers");
const productsRouter = Router();

productsRouter.delete("/:id", deleteProductByIdController.handle);

module.exports = productsRouter;