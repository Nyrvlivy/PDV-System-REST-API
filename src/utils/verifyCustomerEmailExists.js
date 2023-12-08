const { customersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyCustomerEmailExists = async (email) => {
    const emailExists = await customersRepository.getByEmail(email);
    if (emailExists) throw new InvalidParamError("Email já cadastrado");
};

module.exports = verifyCustomerEmailExists;
