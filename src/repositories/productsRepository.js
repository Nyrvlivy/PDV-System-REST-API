const connection = require("../configs/database/connection/connection");

const productsRepository = {
    getById: async function (id) {
        return await connection("produtos").select("*").where("id", id).first();
    },
    deleteById: async function (id) {
        return await connection("produtos").where("id", id).del();
    },
};

module.exports = productsRepository;