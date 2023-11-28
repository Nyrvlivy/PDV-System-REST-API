const { updateUserService } = require("../../services");

const updateUserController = {
    async handle(req, res) {
        try {
            const user = await updateUserService.execute(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = updateUserController;
