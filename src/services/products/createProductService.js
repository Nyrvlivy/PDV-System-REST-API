const { productsRepository } = require("../../repositories");
const { validateProductCreate, verifyCategoryExists } = require("../../utils");
const { uploadProductImage } = require("../../utils");

const createProductService = {
    async execute(payload, file) {
        validateProductCreate(payload);
        const { descricao, quantidade_estoque, valor, categoria_id } = payload;
        await verifyCategoryExists(categoria_id);

        const image = file
            ? await uploadProductImage(
                  `products/${file.originalname}`,
                  file.buffer,
                  file.mimetype
              )
            : null;

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
