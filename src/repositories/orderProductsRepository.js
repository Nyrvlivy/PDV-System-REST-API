const connection = require("../configs/database/connection/connection");

const orderProductsRepository = {
    getByOrder: async function (pedido_id) {
        const orderProducts = await connection("pedido_produtos")
            .select("*")
            .where({ pedido_id });
        return orderProducts;
    },
};

module.exports = orderProductsRepository;
