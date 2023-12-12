const { productsRepository } = require("../../repositories");
const { verifyIdIsValid, verifyProductExists, verifyIfProductIsntIncludedInAnyOrder } = require("../../utils");

const deleteProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyProductExists(id);
        await verifyIfProductIsntIncludedInAnyOrder(id);
        return await productsRepository.delete(id);
    },
};

module.exports = deleteProductByIdService;
