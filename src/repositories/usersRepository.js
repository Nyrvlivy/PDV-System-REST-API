const connection = require("../configs/database/connection/connection");

const usersRepository = {
    getById: async function (id) {
        return await connection
            .select("*")
            .from("usuarios")
            .where("id", id)
            .first();
    },
    getByEmail: async function (email) {
        return await connection
            .select("*")
            .from("usuarios")
            .where("email", email)
            .first();
    },
    update: async function (id, nome, email, senha) {
        return await connection(usuarios)
            .where("id", id)
            .update(nome, email, senha);
    },
};

module.exports = usersRepository;
