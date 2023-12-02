const connection = require("../configs/database/connection/connection");

const costumersRepository = {
    create: async function (
        nome,
        email,
        cpf,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado
    ) {
        const [customer] = await connection("clientes").returning("*").insert({
            nome,
            email,
            cpf,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
        });
        return customer;
    },
    getByEmail: async function (email) {
        const [customer] = await connection("clientes").where({ email });
        return customer;
    },
    getByCPF: async function (cpf) {
        const [customer] = await connection("clientes").where({ cpf });
        return customer;
    },
    getAll: async function () {
        const costumer = await connection("clientes").select("*");
        return costumer;
    },
    getByPK: async function (id) {
        const costumer = await connection("clientes")
            .select("*")
            .where({ id })
            .first();
        return costumer;
    },
};

module.exports = costumersRepository;
