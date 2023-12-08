const { Router } = require("express");
const ordersRouter = Router();
const { createOrderController } = require("../controllers");
const { authToken } = require("../middlewares");

ordersRouter.use(authToken);
ordersRouter.post("/", createOrderController.handle);

module.exports = ordersRouter;
