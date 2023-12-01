const { Router } = require("express");
const costumersRouter = Router();
const { createCostumerController, getCostumerController, getCostumerByIdController } = require("../controllers");
const { authToken } = require("../middlewares");

costumersRouter.use(authToken);
costumersRouter.post("/", createCostumerController.handle);
costumersRouter.get("/:id", getCostumerByIdController.handle);
costumersRouter.get("/", getCostumerController.handle);

module.exports = costumersRouter;
