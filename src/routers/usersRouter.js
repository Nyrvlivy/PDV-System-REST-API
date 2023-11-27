const { Router } = require("express");
const usersRouter = Router();
const { getUserProfileController } = require("../controllers");
const { tokenValidation } = require("../middlewares");

usersRouter.use(tokenValidation);
usersRouter.get("/", getUserProfileController.handle);

module.exports = usersRouter;
