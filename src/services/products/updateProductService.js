const { productsRepository } = require("../../repositories");
const {
    validateProductUpdate,
    verifyProductExists,
    verifyCategoryExists,
    uploadProductImage,
} = require("../../utils");

const updateProductService = {
    async execute(payload, file) {
        validateProductUpdate(payload);
        const { id, descricao, quantidade_estoque, valor, categoria_id } =
            payload;

        await verifyProductExists(id);
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

        return await productsRepository.update(
            id,
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            image
        );
    },
};

module.exports = updateProductService;
