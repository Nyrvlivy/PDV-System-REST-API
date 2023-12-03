const productsRepository = require("../../repositories/productsRepository");

const getProductsService = {
    async execute(categoria_id) {
        if (!categoria_id) {
            const getAllProducts = await productsRepository.getAllProducts();
            return getAllProducts;
        }
        const getProductsByCategory = await productsRepository.getByCategoryId(categoria_id);
        return getProductsByCategory;
    }
};

module.exports = getProductsService;