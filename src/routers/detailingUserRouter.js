const { Router } = require("express");
const detailingUserRouter = Router();
const { detailingUserLoggedController } = require("../controllers");

detailingUserRouter.use(tokenValidation);

detailingUserRouter.get("/", detailingUserLoggedController.handle);

module.exports = detailingUserRouter;
