const { costumersRepository } = require("../../repositories");
const {
    validateCostumerCreate,
    verifyCostumerEmailExists,
    verifyCostumerCPFExists,
} = require("../../utils");

const createCostumerService = {
    async execute(payload) {
        validateCostumerCreate(payload);
        await verifyCostumerEmailExists(payload.email);
        await verifyCostumerCPFExists(payload.cpf);
        const costumer = await costumersRepository.create(
            payload.nome,
            payload.email,
            payload.cpf,
            payload.cep,
            payload.rua,
            payload.numero,
            payload.bairro,
            payload.cidade,
            payload.estado
        );

        return costumer;
    },
};

module.exports = createCostumerService;
