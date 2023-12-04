const { productsRepository } = require("../../repositories");
const { validateProductCreate, verifyCategoryExists } = require("../../utils");

const createProductService = {
    async execute(payload) {
        validateProductCreate(payload);
        const { descricao, quantidade_estoque, valor, categoria_id } = payload;
        await verifyCategoryExists(categoria_id);

        return await productsRepository.create(
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        );
    },
};

module.exports = createProductService;
