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

        await verifyProductExists(payload.id);
        await verifyCategoryExists(payload.categoria_id);

        const updatedProduct = await productsRepository.update(
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        );
        return updatedProduct;
    },
};

module.exports = updateProductService;
