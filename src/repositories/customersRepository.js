const connection = require("../configs/database/connection/connection");

const customersRepository = {
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
        const customer = await connection("clientes").select("*");
        return customer;
    },
    getByPk: async function (id) {
        const customer = await connection("clientes")
            .select("*")
            .where({ id })
            .first();
        return customer;
    },
    update: async function (
        id,
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
        const [customer] = await connection("clientes")
            .where({ id })
            .update({
                nome,
                email,
                cpf,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
            })
            .returning("*");
        return customer;
    },
};

module.exports = customersRepository;
