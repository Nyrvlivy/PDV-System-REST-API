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
    getAll: async function () {
        return await connection.select("*").from("produtos").orderBy("id");
    },
    getByPk: async function (id) {
        const [product] = await connection("produtos").where({ id });
        return product;
    },
    getByCategoryId: async function (categoria_id) {
        return await connection("produtos").select("*").where({ categoria_id });
    },
    update: async function (
        id,
        descricao,
        quantidade_estoque,
        valor,
        categoria_id
    ) {
        const [product] = await connection("produtos")
            .where({ id })
            .returning("*")
            .update({ id, descricao, quantidade_estoque, valor, categoria_id });
        return product;
    },
    delete: async function (id) {
        const [product] = await connection("produtos")
            .where({ id })
            .returning("*")
            .del();
        return product;
    },
};

module.exports = productsRepository;
