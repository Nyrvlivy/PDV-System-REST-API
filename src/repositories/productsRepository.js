const connection = require("../configs/database/connection/connection");

const productsRepository = {
    create: async function (
        descricao,
        quantidade_estoque,
        valor,
        categoria_id
    ) {
        const [product] = await connection("produtos")
            .returning("*")
            .insert({ descricao, quantidade_estoque, valor, categoria_id });
        return product;
    },
};

module.exports = productsRepository;
