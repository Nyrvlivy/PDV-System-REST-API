const { createProductService } = require("../../services");
const { InvalidParamError } = require("../../errors");
const { ValidationError } = require("joi");

const createProductController = {
    async handle(req, res) {
        try {
            const payload = req.body;
            const product = await createProductService.execute(payload);
            return res.status(201).json(product);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json(error.message);
            return res.status(500).json("Erro interno do servidor");
        }
    },
};

module.exports = createProductController;