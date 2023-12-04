const { costumersRepository } = require("../../repositories");
const {
    validateCostumerCreate,
    verifyCostumerEmailExists,
    verifyCostumerCPFExists,
} = require("../../utils");

const createCostumerService = {
    async execute(payload) {
        validateCostumerCreate(payload);
        const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
            payload;
        await verifyCostumerEmailExists(email);
        await verifyCostumerCPFExists(cpf);
        return await costumersRepository.create(
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

module.exports = createCostumerService;
