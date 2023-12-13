const { productsRepository } = require("../../repositories");
const { verifyIdIsValid, verifyProductExists } = require("../../utils");


const deleteProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        const product = await verifyProductExists(id);
        console.log(product)
        image = await deleteProductImage(
            `products/${file.originalname}`,
        );
        return await productsRepository.delete(id)
    }
}

module.exports = deleteProductByIdService;
