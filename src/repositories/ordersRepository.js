const connection = require("../configs/database/connection/connection");

const ordersRepository = {
    create: async function (orderData, productsData) {
        let order;
        let savedProducts = [];

        await connection.transaction(async function (trx) {
            try {
                order = await connection("pedidos")
                    .returning("*")
                    .insert(orderData)
                    .transacting(trx);

                for (const productData of productsData) {
                    const [savedProduct] = await connection("pedido_produtos")
                        .returning("*")
                        .insert({
                            pedido_id: order[0].id,
                            ...productData,
                        })
                        .transacting(trx);
                    savedProducts.push(savedProduct);
                }

                await trx.commit();
            } catch (error) {
                await trx.rollback();
                throw error;
            }
        });

        return { pedidos: order[0], pedido_produtos: savedProducts };
    },

    getAll: async function () {
        const orders = await connection("pedidos").select("*");
        return orders;
    },
    getByCustomer: async function (cliente_id) {
        const orders = await connection("pedidos")
            .select("*")
            .where({ cliente_id });
        return orders;
    },
    getById: async function (pedido_id) {
        const order = await connection("pedidos")
            .select("*")
            .where({ pedido_id })
            .first();
        return order;
    },
};

module.exports = ordersRepository;
