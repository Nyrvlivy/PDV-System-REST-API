const { customersRepository } = require("../../repositories");

const getAllCustomersService = {
    async execute() {
        return await customersRepository.getAll();
    },
};
module.exports = getAllCustomersService;
