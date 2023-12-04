const createCostumerService = require("../../services/costumers/createCostumerService");
const { InvalidParamError } = require("../../errors");
const { ValidationError } = require("joi");
const e = require("cors");

const createCostumerController = {
    async handle(req, res) {
        try {
            const payload = req.body;
            const costumer = await createCostumerService.execute(payload);

            return res.status(201).json(costumer);
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

module.exports = createCostumerController;
