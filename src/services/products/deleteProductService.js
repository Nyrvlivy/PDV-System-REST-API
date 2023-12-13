const { productsRepository } = require("../../repositories");
const {
    verifyIdIsValid,
    verifyProductExists,
    validateProductExclusionFromOrders,
} = require("../../utils");
const s3 = require("../../configs/upload/s3");

const deleteProductByIdService = {
    async execute(id) {
        try {
            verifyIdIsValid(id);
            await verifyProductExists(id);
            await validateProductExclusionFromOrders(id);

            const product = await productsRepository.getByPk(id);

            const imageUrl = product.produto_imagem;
            if (imageUrl) {
                const imageKey = imageUrl.replace(
                    `https://${process.env.KEY_NAME}.${process.env.ENDPOINT_S3}/`,
                    ""
                );
                await s3
                    .deleteObject({
                        Bucket: process.env.KEY_NAME,
                        Key: imageKey,
                    })
                    .promise();

                console.log(`Imagem deletada com sucesso: ${imageUrl}`);
            }

            await productsRepository.delete(id);

            console.log(`Produto deletado com sucesso. ID: ${id}`);
        } catch (error) {
            throw error;
        }
    },
};

module.exports = deleteProductByIdService;
