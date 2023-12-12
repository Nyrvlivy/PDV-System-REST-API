const connection = require("../configs/database/connection/connection");

const ordersRepository = {
    getAll: async function () {
        const orders = await connection("pedidos").select("*");
        return orders;
    },
    getByCustomer: async function (id) {
        const orders = await connection("pedidos")
            .select("*")
            .where("cliente_id", id)
            .first();
        return orders;
    },
};

module.exports = ordersRepository;
