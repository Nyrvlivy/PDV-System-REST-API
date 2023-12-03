const { costumersRepository } = require("../../repositories");
const {
    validateCostumerUpdate,
    verifyCostumerExists,
    verifyCostumerCPFExists,
    verifyCostumerEmailExists,
} = require("../../utils");

const updateCostumerService = {
    async execute(payload) {
        validateCostumerUpdate(payload);
        const { id, nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = payload;

        await verifyCostumerExists(id);
        await verifyCostumerEmailExists(email);
        await verifyCostumerCPFExists(cpf);
        const costumer = await costumersRepository.update(
            id,
            nome,
            email,
            cpf,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado
        );
        return costumer;
    },
};

module.exports = updateCostumerService;
