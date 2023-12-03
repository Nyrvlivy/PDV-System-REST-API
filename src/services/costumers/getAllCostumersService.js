const { costumersRepository } = require("../../repositories");

const getAllCostumersService = {
    async execute() {
        const costumer = await costumersRepository.getAll();

        return costumer;
    },
};
module.exports = getAllCostumersService;
