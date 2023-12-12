const connection = require("../configs/database/connection/connection");

const ordersRepository = {
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
};

module.exports = ordersRepository;
