const { Router } = require("express");
const productsRouter = Router();
const {
    createProductController,
    updateProductController,
} = require("../controllers");
const { authToken } = require("../middlewares");

productsRouter.use(authToken);
productsRouter.post("/", createProductController.handle);
productsRouter.put("/:id", updateProductController.handle);

module.exports = productsRouter;
