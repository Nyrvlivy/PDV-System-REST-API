const { costumersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyCostumerCPFExists = async (cpf) => {
    const cpfExists = await costumersRepository.getByCPF(cpf);
    if (cpfExists) throw new InvalidParamError("CPF já cadastrado");
};

module.exports = verifyCostumerCPFExists;
