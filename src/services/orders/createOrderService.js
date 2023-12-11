const connection = require("../../configs/database/connection/connection");
const { validateOrderCreate, verifyCustomerExists } = require("../../utils");
const {
    productsRepository,
    customersRepository,
} = require("../../repositories");
const { NotFoundError } = require("../../errors");
const { OrderEmailService } = require("../email");

const createOrderService = {
    async execute(payload) {
        validateOrderCreate(payload);
        const { cliente_id, observacao, pedido_produtos } = payload;
        await verifyCustomerExists(cliente_id);

        let orderProductsData;
        await connection.transaction(async function (trx) {
            try {
                let valor_total = 0;
                const savedProducts = [];
                let [order] = await connection("pedidos")
                    .returning("*")
                    .insert({
                        cliente_id,
                        observacao,
                        valor_total: 0,
                    })
                    .transacting(trx);
                for (const orderProducts of pedido_produtos) {
                    const product = await productsRepository.getByPk(
                        orderProducts.produto_id
                    );
                    if (!product)
                        throw new NotFoundError("Produto não encontrado.");

                    if (
                        product.quantidade_estoque <
                        orderProducts.quantidade_produto
                    ) {
                        throw new NotFoundError(
                            "Quantidade em estoque insuficiente."
                        );
                    }

                    valor_total +=
                        product.valor * orderProducts.quantidade_produto;
                    const [savedProduct] = await connection("pedido_produtos")
                        .returning("*")
                        .insert({
                            pedido_id: order.id,
                            produto_id: product.id,
                            quantidade_produto:
                                orderProducts.quantidade_produto,
                            valor_produto: product.valor,
                        })
                        .transacting(trx);
                    savedProducts.push(savedProduct);
                }
                order = await connection("pedidos")
                    .returning("*")
                    .where("id", order.id)
                    .update({ valor_total })
                    .transacting(trx);

                await trx.commit();

                orderProductsData = {
                    pedido: order[0],
                    pedido_produtos: savedProducts,
                };

                const customerOrderEmail =
                    await customersRepository.getEmailByPk(cliente_id);

                await OrderEmailService.sendOrderConfirmationEmail(
                    customerOrderEmail
                );
            } catch (error) {
                throw error;
            }
        });
        return orderProductsData;
    },
};

module.exports = createOrderService;
