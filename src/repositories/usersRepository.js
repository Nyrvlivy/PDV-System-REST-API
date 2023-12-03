const connection = require("../configs/database/connection/connection");

const usersRepository = {
    create: async function (nome, email, senha) {
        const [user] = await connection("usuarios")
            .returning("*")
            .insert({ nome, email, senha });
        return user;
    },
    getById: async function (id) {
        return await connection("usuarios").select("*").where({ id }).first();
    },
    getByEmail: async function (email) {
        return await connection("usuarios")
            .select("*")
            .where({ email })
            .first();
    },
    update: async function (id, nome, email, senha) {
        const [user] = await connection("usuarios")
            .where({ id })
            .returning("*")
            .update({ nome, email, senha });
        return user;
    },
};

module.exports = usersRepository;
