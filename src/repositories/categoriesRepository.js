const connection = require("../configs/database/connection/connection");

const categoriesRepository = {
    getAll: async function () {
        return await connection.select("*").from("categorias");
    },

    getById: async function (id) {
        return await connection
            .select("*")
            .from("categorias")
            .where("id", id)
            .first();
    },
};

module.exports = categoriesRepository;
