const { productRepository } = require("../../repositories");
const { productExists, validateMandatoryFields, validateExistingCategory } = require("../../utils/validateProductExists");

const updateProductService = {
    async execute(payload) {
        validateMandatoryFields(payload);
        const { id, descricao, quantidade_estoque, valor, categoria_id } = payload;

        await productExists(id);

        await validateExistingCategory(categoria_id);

        const updateProduct = await productRepository.update(
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
