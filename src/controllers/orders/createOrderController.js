const { createOrderService } = require("../../services");
const { InvalidParamError, NotFoundError } = require("../../errors");
const { ValidationError } = require("joi");

const createOrderController = {
    async handle(req, res) {
        try {
            const payload = req.body;
            const order = await createOrderService.execute(payload);

            return res.status(201).json([order]);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            ) {
                return res.status(400).json({ error: error.message });
            }
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = createOrderController;
