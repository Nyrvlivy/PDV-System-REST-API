const { productsRepository } = require("../repositories")

const verifyIfProductIsntIncludedInAnyOrder = async (id) => {
    const produto_id = id;
    const searchingProductInOrders = await productsRepository.getByOrder(produto_id);
    if (searchingProductInOrders) {
        return res.status(400).json({ mensagem: "Não é possível excluir este produto. O produto atual se encontra atribuído a um pedido." });
    }
};

module.exports = verifyIfProductIsntIncludedInAnyOrder;