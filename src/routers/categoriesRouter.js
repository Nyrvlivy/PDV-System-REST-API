const { Router } = require("express");
const categoriesRouter = Router();
const { getAllCategoriesController, xBolinha } = require("../controllers");

categoriesRouter.get("/", getAllCategoriesController.handle);

module.exports = categoriesRouter;
