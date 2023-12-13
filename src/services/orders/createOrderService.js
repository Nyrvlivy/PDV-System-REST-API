const {
    validateOrderCreate,
    verifyProductExists,
    verifyCustomerExists,
} = require("../../utils");
const {
    productsRepository,
    customersRepository,
    ordersRepository,
} = require("../../repositories");
const { InvalidParamError } = require("../../errors");
const { OrderEmailService } = require("../email");

const createOrderService = {
    async execute(payload) {
        const { cliente_id, observacao, pedido_produtos } = payload;
        validateOrderCreate(payload);
        const customerData = await customersRepository.getByPk(cliente_id);
        await verifyCustomerExists(cliente_id);

        const orderData = {
            cliente_id,
            observacao,
            valor_total: 0,
        };

        const productsData = [];

        for (const orderProducts of pedido_produtos) {
            const product = await productsRepository.getByPk(
                orderProducts.produto_id
            );

            await verifyProductExists(orderProducts.produto_id);

            if (product.quantidade_estoque < orderProducts.quantidade_produto) {
                throw new InvalidParamError(
                    "Quantidade em estoque insuficiente."
                );
            }

            orderData.valor_total +=
                product.valor * orderProducts.quantidade_produto;

            productsData.push({
                produto_id: product.id,
                quantidade_produto: orderProducts.quantidade_produto,
                valor_produto: product.valor,
            });
        }

        const orderProductsData = await ordersRepository.create(
            orderData,
            productsData
        );

        const orderNumber = orderProductsData.pedidos.id;
        const customerName = customerData.nome;
        const customerOrderEmail = await customersRepository.getEmailByPk(
            cliente_id
        );

        await OrderEmailService.sendOrderConfirmationEmail(
            customerOrderEmail,
            orderNumber,
            customerName
        );

        return orderProductsData;
    },
};

module.exports = createOrderService;
