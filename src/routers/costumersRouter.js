const { Router } = require("express");
const costumersRouter = Router();
const { createCostumerController } = require("../controllers");
const { authToken } = require("../middlewares");

costumersRouter.use(authToken);
costumersRouter.post("/", createCostumerController.handle);

module.exports = costumersRouter;
