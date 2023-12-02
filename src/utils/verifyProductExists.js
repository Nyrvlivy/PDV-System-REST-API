const { productsRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyProductExists = async (id) => {
    const product = await productsRepository.findByPk(id);
    if (!product) throw new InvalidParamError("Produto não encontrado.");
};

module.exports = verifyProductExists;
