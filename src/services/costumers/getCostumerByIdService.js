const { costumersRepository } = require("../../repositories");
const { verifyIdIsValid, verifyCostumerExists } = require("../../utils");

const getCostumerByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyCostumerExists(id);
        const costumer = await costumersRepository.getByPk(id);

        return costumer;
    },
};
module.exports = getCostumerByIdService;
