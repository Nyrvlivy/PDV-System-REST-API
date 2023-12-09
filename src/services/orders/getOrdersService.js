const { ordersRepository } = require("../../repositories");
const { verifyIdIsValid } = require("../../utils");

const getOrdersServices = {
    async execute(cliente_id) {
        if (cliente_id) {
            verifyIdIsValid(cliente_id);
            await verifyCustomerExists(cliente_id);

            return await ordersRepository.getByPk(cliente_id);
        }
        return await customersRepository.getAll();
    }
}

module.exports = getOrdersServices;