const connection = require("../configs/database/connection/connection");

const productsRepository = {
    getAllProducts: async function () {
        return await connection.select("*").from("produtos");
    },
    getByCategoryId: async function (categoria_id) {
        return await connection("produtos").select("*").where("categoria_id", categoria_id);
    },
    getById: async function (id) {
        return await connection("produtos").select("*").where("id", id).first();
    },
    deleteById: async function (id) {
        return await connection("produtos").where("id", id).del();
    },
};

module.exports = productsRepository;