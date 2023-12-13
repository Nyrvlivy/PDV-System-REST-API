const { createUserService } = require("../../services");
const { InvalidParamError } = require("../../errors");
const { ValidationError } = require("joi");

const createUserController = {
    async handle(req, res) {
        try {
            const payload = req.body;
            const user = await createUserService.execute(payload);
            return res.status(201).json(user);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json({error: error.message});
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = createUserController;
