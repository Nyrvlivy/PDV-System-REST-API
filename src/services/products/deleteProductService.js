const { productsRepository } = require("../../repositories");
const { verifyIdIsValid, verifyProductExists, deleteProductImage } = require("../../utils");


const deleteProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        const product = await verifyProductExists(id);
        const index = product.produto_imagem.lastIndexOf('products')
        let fileName = product.produto_imagem.slice(index)
        image = await deleteProductImage(
            fileName
        );
        return await productsRepository.delete(id)
    }
}

module.exports = deleteProductByIdService;
