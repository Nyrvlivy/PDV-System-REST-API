const { Router } = require("express");
const customersRouter = Router();
const {
    createCustomerController,
    getAllCustomersController,
    getCustomerByIdController,
    updateCustomerController,
} = require("../controllers");
const { authToken } = require("../middlewares");

customersRouter.use(authToken);
customersRouter.post("/", createCustomerController.handle);
customersRouter.get("/", getAllCustomersController.handle);
customersRouter.get("/:id", getCustomerByIdController.handle);
customersRouter.put("/:id", updateCustomerController.handle);

module.exports = customersRouter;
