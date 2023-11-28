const knex = require("../conexao");
const bcrypt = require("bcrypt");


const verificarEmailExistente = async (email, id) => {
    const conferirEmail = await knex("usuarios")
        .where({ email })
        .whereNot({ id });

    if (conferirEmail.length > 0) {
        throw new Error("Esse e-mail já está cadastrado.");
    }
};

const editarUsuario = async (id, nome, email, senha) => {

    try {
        await usuarioService.validarCampos({ nome, email, senha });
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }

    try {
        await verificarEmailExistente(email, id);

        const criptografarSenha = await bcrypt.hash(senha, 10);

        const resultado = await knex("usuarios").where({ id }).update({
            nome,
            email,
            senha: criptografarSenha,
        }).returning(['id', 'nome', 'email']);

        if (!resultado) {
            throw new Error(
                "Perfil do usuário não pôde ser atualizado! Verifique os campos obrigatórios!"
            );
        }

        return dadosObrigatorios;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    editarUsuario,
};