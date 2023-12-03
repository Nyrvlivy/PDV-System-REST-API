const { costumersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyCostumerEmailExists = async (email) => {
    const emailExists = await costumersRepository.getByEmail(email);
    if (emailExists) throw new InvalidParamError("Email já cadastrado");
};

module.exports = verifyCostumerEmailExists;
