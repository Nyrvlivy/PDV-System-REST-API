const { costumersRepository } = require("../../repositories");

const getCostumerService = {
    async execute() {
        const costumer = await costumersRepository.getAll();
        return costumer;
    }
}
module.exports = getCostumerService;