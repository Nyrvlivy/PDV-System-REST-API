const { Router } = require("express");
const { loginUserController } = require("../controllers");
const validateLoginCredentials = require("../middlewares/validateLoginCredentials");
const loginRouter = Router();

loginRouter.post("/", validateLoginCredentials, loginUserController.handle);

module.exports = loginRouter;