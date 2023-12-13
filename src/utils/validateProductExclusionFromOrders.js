const { productsRepository } = require("../repositories");
const { ConflictError } = require("../errors");

const validateProductExclusionFromOrders = async (produto_id) => {
    const ordersForProduct = await productsRepository.getByOrder(produto_id);
    if (ordersForProduct.length > 0) {
        throw new ConflictError(
            "Produto está atualmente vinculado a um pedido e não pode ser excluído."
        );
    }
};

module.exports = validateProductExclusionFromOrders;
