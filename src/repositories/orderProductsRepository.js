const connection = require("../configs/database/connection/connection");

const orderProductsRepository = {
    getByOrder: async function (id) {
        const orderProducts = await connection("pedido_produtos")
            .select("*")
            .where("pedido_id", id)
            .first();
        return orderProducts;
    },
};

module.exports = orderProductsRepository;
