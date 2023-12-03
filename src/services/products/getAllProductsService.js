const { productsRepository } = require("../../repositories");
const { verifyCategoryExists, verifyIdIsValid } = require("../../utils");

const getAllProductsService = {
    async execute(categoria_id) {
        if (!categoria_id) {
            return await productsRepository.getAll();
        }
        verifyIdIsValid(categoria_id);
        await verifyCategoryExists(categoria_id);
        return await productsRepository.getByCategoryId(categoria_id);
    },
};

module.exports = getAllProductsService;
