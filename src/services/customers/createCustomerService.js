const { customersRepository } = require("../../repositories");
const {
    validateCustomerCreate,
    verifyCustomerEmailExists,
    verifyCustomerCPFExists,
} = require("../../utils");

const createCustomerService = {
    async execute(payload) {
        validateCustomerCreate(payload);
        const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
            payload;
        await verifyCustomerEmailExists(email);
        await verifyCustomerCPFExists(cpf);
        return await customersRepository.create(
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

module.exports = createCustomerService;
