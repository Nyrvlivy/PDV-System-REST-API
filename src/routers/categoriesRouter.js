const { Router } = require("express");
const categoriesRouter = Router();
const { getAllCategoriesController } = require("../controllers");

categoriesRouter.get("/", getAllCategoriesController.handle);

module.exports = categoriesRouter;
