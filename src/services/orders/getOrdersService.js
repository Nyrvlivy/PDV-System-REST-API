const {
    ordersRepository,
    orderProductsRepository,
} = require("../../repositories");
const { verifyIdIsValid, verifyCustomerExists } = require("../../utils");

const getOrdersServices = {
    async execute(cliente_id) {
        const orderProductsData = [];
        let orders;

        if (cliente_id) {
            verifyIdIsValid(cliente_id);
            await verifyCustomerExists(cliente_id);
            orders = await ordersRepository.getByCustomer(cliente_id);
        } else {
            orders = await ordersRepository.getAll();
        }

        for (const order of orders) {
            const orderProducts = await orderProductsRepository.getByOrder(
                order.id
            );
            orderProductsData.push({
                pedido: order,
                pedido_produtos: orderProducts,
            });
        }

        return orderProductsData;
    },
};

module.exports = getOrdersServices;
