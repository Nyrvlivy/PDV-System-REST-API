const { productsRepository } = require("../../repositories");
const { verifyIdIsValid, verifyProductExists } = require("../../utils");

const deleteProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyProductExists(id);
        return await productsRepository.delete(id);
    },
};

module.exports = deleteProductByIdService;
