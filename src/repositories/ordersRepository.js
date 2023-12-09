const connection = require("../configs/database/connection/connection");

const ordersRepository = {
    getAll: async function () {
        const orders = await connection("pedidos").select("*");
        return orders;
    },
    getByPk: async function (cliente_id) {
        const orders = await connection("pedidos")
            .select("*")
            .where({ cliente_id })
            .first();
        return orders;
    }
};

module.exports = ordersRepository;