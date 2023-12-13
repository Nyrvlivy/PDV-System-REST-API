const { Router } = require("express");
const productsRouter = Router();
const {
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
} = require("../controllers");
const { authToken } = require("../middlewares");
const multer = require('../configs/upload/multer');

productsRouter.use(authToken);
productsRouter.post("/", multer.single('produto_imagem'), createProductController.handle);
productsRouter.get("/", getAllProductsController.handle);
productsRouter.get("/:id", getProductByIdController.handle);
productsRouter.put("/:id", multer.single('produto_imagem'), updateProductController.handle);
productsRouter.delete("/:id", deleteProductController.handle);

module.exports = productsRouter;
