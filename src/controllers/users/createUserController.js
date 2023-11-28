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
            if (error instanceof InvalidParamError)
                return res.status(400).json(error.message);
            if (error instanceof ValidationError)
                return res.status(400).json(error.message);
            return res.status(500).json("Erro interno do servidor");
        }
    },
};

module.exports = createUserController;
