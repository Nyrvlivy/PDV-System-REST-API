const connection = require("../configs/database/connection/connection");
const { loginUserSchema } = require("../schemas");
const { ValidationError } = require("joi");
const bcrypt = require("bcrypt");

const validateLoginCredentials = async (req, res, next) => {
    try {
        const { email, senha } = req.body;

        const { error } = loginUserSchema.validate({ email, senha });
        if (error) throw error;

        const user = await connection("usuarios").where({ email }).first();
        if (!user) {
            return res
                .status(400)
                .json({ error: "Email ou senha inválidos" });
        }
        const { senha: hashedPassword, ...userData } = user;
        const isPasswordValid = await bcrypt.compare(senha, hashedPassword);
        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ error: "Email ou senha inválidos" });
        }
        req.user = userData;
        next();
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};

module.exports = validateLoginCredentials;
