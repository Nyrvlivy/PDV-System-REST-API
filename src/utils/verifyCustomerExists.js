const { customersRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyCustomerExists = async (id) => {
    const customerExists = await customersRepository.getByPk(id);
    if (!customerExists) throw new NotFoundError("Cliente não encontrado");
};

module.exports = verifyCustomerExists;
