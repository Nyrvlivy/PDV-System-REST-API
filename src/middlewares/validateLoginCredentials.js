const connection = require("../configs/database/connection/connection");
const bcrypt = require("bcrypt");

const validateLoginCredentials = async (req, res, next) => {
    try {
        const { email, senha } = req.body;
        const user = await connection('usuarios').where({ email });
        if (!user) {
            return res.status(400).json({ mensagem: "Email ou senha inválidos" })
        };
        const { senha: hashedPassword, ...userData } = user;
        const isPasswordValid = await bcrypt.compare(senha, hashedPassword);
        if (!isPasswordValid) {
            return res.status(400).json({ mensagem: "Email ou senha inválidos" })
        }
        userData = req.user
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
};

module.exports = validateLoginCredentials;