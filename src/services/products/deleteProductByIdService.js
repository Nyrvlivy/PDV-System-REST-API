const { productsRepository } = require("../../repositories");
const { verifyIfProductIdExists } = require("../../utils");

const deleteProductByIdService = {
    async execute(id) {
        await verifyIfProductIdExists(id);
        const deletingProduct = await productsRepository.deleteById(id);
        return deletingProduct;
    }
};

module.exports = deleteProductByIdService;