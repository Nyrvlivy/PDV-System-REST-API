const { productsRepository } = require("../../repositories");
const { validateProductCreate, verifyCategoryExists, uploadProductImage } = require("../../utils");

const createProductService = {
    async execute(payload, file) {
        validateProductCreate(payload);
        const { descricao, quantidade_estoque, valor, categoria_id } = payload;
        await verifyCategoryExists(categoria_id);

        let image;

        if (!file) {
            image = null;
        } else {
            image = await uploadProductImage(
                `products/${file.originalname}`,
                file.buffer,
                file.mimetype
            );
        }


        return await productsRepository.create(
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            image
        );
    },
};

module.exports = createProductService;
