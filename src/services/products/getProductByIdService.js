const productsRepository = require("../../repositories/productsRepository");
const { verifyIfProductIdExists } = require("../../utils");

const getProductByIdService = {
    async execute(id) {
        await verifyIfProductIdExists(id);
        const gettingProduct = await productsRepository.getById(id);
        return gettingProduct;
    }
};

module.exports = getProductByIdService;