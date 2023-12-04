const { costumersRepository } = require("../../repositories");

const getAllCostumersService = {
    async execute() {
        return await costumersRepository.getAll();
    },
};
module.exports = getAllCostumersService;
