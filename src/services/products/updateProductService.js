const { productsRepository } = require("../../repositories");
const {
    validateProductExists,
    validateMandatoryFields,
    validateExistingCategory,
} = require("../../utils/validateProductExists");

const updateProductService = {
    async execute(payload) {
        validateMandatoryFields(payload);
        const { id, descricao, quantidade_estoque, valor, categoria_id } =
            payload;

        await validateProductExists(id);
        await validateExistingCategory(categoria_id);

        const updateProduct = await productsRepository.update(
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        );

        return updateProduct;
    },
};

module.exports = updateProductService;
