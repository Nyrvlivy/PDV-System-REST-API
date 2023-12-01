const { costumersRepository } = require("../../repositories");

const getCostumerByIdService = {
    async execute(id) {
        const costumer = await costumersRepository.getById(id);
        return costumer;
    }
}
module.exports = getCostumerByIdService;