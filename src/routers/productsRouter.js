const { Router } = require("express");
const productsRouter = Router();
const { createProductController } = require("../controllers");
const { authToken } = require("../middlewares");

productsRouter.use(authToken);
productsRouter.post("/", createProductController.handle);

module.exports = productsRouter;
