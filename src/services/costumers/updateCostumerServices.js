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
        return await costumersRepository.update(
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
    },
};

module.exports = updateCostumerService;
