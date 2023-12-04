const { costumersRepository } = require("../../repositories");
const { verifyIdIsValid, verifyCostumerExists } = require("../../utils");

const getCostumerByIdService = {
    async execute(id) {
        verifyIdIsValid(id);
        await verifyCostumerExists(id);
        return await costumersRepository.getByPk(id);
    },
};
module.exports = getCostumerByIdService;
