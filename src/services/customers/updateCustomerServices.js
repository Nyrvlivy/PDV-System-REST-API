const { customersRepository } = require("../../repositories");
const {
    validateCustomerUpdate,
    verifyCustomerExists,
    verifyCustomerCPFExists,
    verifyCustomerEmailExists,
} = require("../../utils");

const updateCustomerService = {
    async execute(payload) {
        validateCustomerUpdate(payload);
        const { id, nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = payload;

        await verifyCustomerExists(id);
        await verifyCustomerEmailExists(email);
        await verifyCustomerCPFExists(cpf);
        return await customersRepository.update(
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

module.exports = updateCustomerService;
