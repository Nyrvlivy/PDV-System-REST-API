const { customersRepository } = require("../../repositories");
const { verifyIdIsValid, verifyCustomerExists } = require("../../utils");

const getCustomerByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyCustomerExists(id);
        return await customersRepository.getByPk(id);
    },
};
module.exports = getCustomerByIdService;
