const { Router } = require("express");
const costumersRouter = Router();
const {
    createCostumerController,
    getAllCostumersController,
    getCostumerByIdController,
    updateCostumerController,
} = require("../controllers");
const { authToken } = require("../middlewares");

costumersRouter.use(authToken);
costumersRouter.post("/", createCostumerController.handle);
costumersRouter.get("/", getAllCostumersController.handle);
costumersRouter.get("/:id", getCostumerByIdController.handle);
costumersRouter.put("/:id", updateCostumerController.handle);

module.exports = costumersRouter;
