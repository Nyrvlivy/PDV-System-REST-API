const { Router } = require("express");
const usersRouter = Router();
const {
    createUserController,
    getUserProfileController,
    updateUserController,
} = require("../controllers");
const { authToken } = require("../middlewares");

usersRouter.post("/", createUserController.handle);
usersRouter.use(authToken);
usersRouter.get("/", authToken, getUserProfileController.handle);
usersRouter.put("/", authToken, updateUserController.handle);

module.exports = usersRouter;
