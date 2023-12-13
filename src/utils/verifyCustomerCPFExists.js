const { customersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyCustomerCPFExists = async (cpf) => {
    const cpfExists = await customersRepository.getByCPF(cpf);
    if (cpfExists) throw new InvalidParamError("CPF já cadastrado");
};

module.exports = verifyCustomerCPFExists;
