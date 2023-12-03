const { productsRepository } = require("../../repositories");
const { validateProductCreate, verifyCategoryExists } = require("../../utils");

const createProductService = {
    async execute(payload) {
        validateProductCreate(payload);
        await verifyCategoryExists(payload.categoria_id);

        const product = await productsRepository.create(
            payload.descricao,
            payload.quantidade_estoque,
            payload.valor,
            payload.categoria_id
        );
        return product;
    },
};

module.exports = createProductService;
