const { updateUserService } = require("../../services");
const { InvalidParamError } = require("../../errors");
const { ValidationError } = require("joi");

const updateUserController = {
    async handle(req, res) {
        try {
            const { id } = req.loggedUser;
            const user = await updateUserService.execute({ ...req.body, id });
            return res.status(200).json(user);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json({ error: error.message });
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = updateUserController;
