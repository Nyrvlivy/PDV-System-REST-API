const connection = require("../configs/database/connection/connection");

const categoriesRepository = {
    getAll: async function () {
        return connection.select("*").from("categorias");
    },

    getById: async function (id) {
        return connection
            .select("*")
            .from("categorias")
            .where("id", id)
            .first();
    },
};

module.exports = categoriesRepository;
