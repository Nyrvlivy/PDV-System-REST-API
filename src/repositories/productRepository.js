const connection = require("../configs/database/connection/connection");

const productRepository = {

    update: async function (id, descricao, quantidade_estoque, valor, categoria_id) {
        const [product] = await connection("produtos")
            .where("id", id)
            .returning("*")
            .update({ id, descricao, quantidade_estoque, valor, categoria_id });
        return product;
    },

    findByPk: async function (id) {
        const [product] = await connection("produtos")
            .where("id", id);
        return product;
    }
};

module.exports = productRepository;

