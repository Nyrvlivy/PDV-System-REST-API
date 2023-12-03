const { productsRepository } = require("../../repositories");
const { verifyIdIsValid, verifyProductExists } = require("../../utils");

const getProductByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyProductExists(id);
        return await productsRepository.getByPk(id);
    },
};

module.exports = getProductByIdService;
