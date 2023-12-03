const { costumersRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyCostumerExists = async (id) => {
    const costumerExists = await costumersRepository.getByPk(id);
    if (!costumerExists) throw new NotFoundError("Cliente não encontrado");
};

module.exports = verifyCostumerExists;
