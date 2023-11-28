const usuarioService = require("../services/usuarioService");

const editarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.usuario;

    try {
        await usuarioService.validarCampos({ nome, email, senha });
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }

    try {
        await usuarioService.verificarEmailExistente(email, id);

        const resultado = await usuarioService.editarUsuario(id, nome, email, senha);

        if (!resultado) {
            return res.status(400).json({
                mensagem: "Perfil do usuário não pôde ser atualizado! Verifique os campos obrigatórios!",
            });
        }

        const novoUsuario = await usuarioService.obterUsuarioPorId(id);

        const { senha: _, ...dadosObrigatorios } = novoUsuario;

        return res.status(200).json(dadosObrigatorios);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {
    editarUsuario,
};