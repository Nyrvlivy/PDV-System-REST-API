const { Router } = require("express");
const ordersRouter = Router();
const {
    createOrderController,
    getOrdersController,
} = require("../controllers");
const { authToken } = require("../middlewares");

ordersRouter.use(authToken);
ordersRouter.post("/", createOrderController.handle);
ordersRouter.get("/", getOrdersController.handle);

module.exports = ordersRouter;
