const { productsRepository } = require("../../repositories");
const {
    verifyIdIsValid,
    verifyProductExists,
    validateProductExclusionFromOrders,
} = require("../../utils");

const deleteProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyProductExists(id);
        await validateProductExclusionFromOrders(id);
        return await productsRepository.delete(id);
    },
};

module.exports = deleteProductByIdService;
