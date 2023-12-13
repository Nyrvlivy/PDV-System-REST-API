const { loginUserService } = require("../../services");

const loginUserController = {
    async handle(req, res) {
        try {
            const token = loginUserService.execute(req.user);
            return res.status(200).json({ usuario: req.user, token: token });
        } catch (error) {
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = loginUserController;
