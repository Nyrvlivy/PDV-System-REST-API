const { categoriesRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyCategoryExists = async (id) => {
    const categoryExists = await categoriesRepository.getByPK(id);
    if (!categoryExists) throw new InvalidParamError("Categoria não existe");
};

module.exports = verifyCategoryExists;
