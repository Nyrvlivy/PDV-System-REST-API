const connection = require("../configs/database/connection/connection");

const categoriesRepository = {
    getAll: async function () {
        return await connection.select("*").from("categorias").orderBy("id");
    },
    getByPk: async function (id) {
        return await connection("categorias").where({ id });
    },
};

module.exports = categoriesRepository;
