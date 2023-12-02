const { productsRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyProductExists = async (id) => {
    const productExists = await productsRepository.findByPk(id);
    if (!productExists) throw new NotFoundError("Produto não encontrado.");
};

module.exports = verifyProductExists;
