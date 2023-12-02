const { costumersRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyCostumerExists = async (id) => {
    const costumerExists = await costumersRepository.getByPK(id);
    if (!costumerExists) throw new NotFoundError("Cliente não encontrado");
};

module.exports = verifyCostumerExists;
