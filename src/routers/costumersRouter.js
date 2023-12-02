const { Router } = require("express");
const costumersRouter = Router();
const {
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
} = require("../controllers");
const { authToken } = require("../middlewares");

costumersRouter.use(authToken);
costumersRouter.post("/", createCostumerController.handle);
costumersRouter.get("/", getAllCostumersController.handle);
costumersRouter.get("/:id", getCostumerByIdController.handle);

module.exports = costumersRouter;
