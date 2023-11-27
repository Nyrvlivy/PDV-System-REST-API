const jwt = require("jsonwebtoken");
const connection = require("../configs/database/connection/connection");
const { jwtSecretKey } = require("../configs/auth");

const authToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            mensagem:
                "Para acessar este recurso um token de autenticação válido deve ser enviado.",
        });
    }

    const token = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, jwtSecretKey);

        const verify = await connection("usuarios").where({ id }).first();

        const { senha: _, ...loggedUser } = verify;

        req.loggedUser = loggedUser;
        next();
    } catch (erro) {
        if ((erro.message = "invalid token")) {
            return res.status(401).json({
                mensagem:
                    "Para acessar este recurso um token de autenticação válido deve ser enviado.",
            });
        }
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

module.exports = authToken;
