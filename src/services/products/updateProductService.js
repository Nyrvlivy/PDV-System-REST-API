const { productsRepository } = require("../../repositories");
const {
    validateProductUpdate,
    verifyProductExists,
    verifyCategoryExists,
} = require("../../utils");

const updateProductService = {
    async execute(payload) {
        validateProductUpdate(payload);
        const { id, descricao, quantidade_estoque, valor, categoria_id } =
            payload;

        await verifyProductExists(id);
        await verifyCategoryExists(categoria_id);

        return await productsRepository.update(
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        );
    },
};

module.exports = updateProductService;
