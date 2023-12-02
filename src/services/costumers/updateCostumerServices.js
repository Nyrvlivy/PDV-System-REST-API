const { costumersRepository } = require("../../repositories");
const { validateCostumerUpdate, verifyCostumerExists, verifyCostumerCPFExists, verifyCostumerEmailExists } = require("../../utils");

const updateCostumerService = {
    async execute(id, payload) {

        validateCostumerUpdate(id, payload);
        await verifyCostumerExists(id);
        await verifyCostumerEmailExists(payload.email);
        await verifyCostumerCPFExists(payload.cpf);

        const costumer = await costumersRepository.update(
            id,
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

module.exports = updateCostumerService;