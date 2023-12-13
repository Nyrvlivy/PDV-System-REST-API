const { productsRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyProductExists = async (id) => {
    const productExists = await productsRepository.getByPk(id);
    if (!productExists) throw new NotFoundError("Produto não encontrado.");
    return productExists
};

module.exports = verifyProductExists;
