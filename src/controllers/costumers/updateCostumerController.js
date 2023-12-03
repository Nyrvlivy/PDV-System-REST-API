const { updateCostumerService } = require("../../services");
const {
    InvalidParamError,
    MissingParamError,
    NotFoundError,
} = require("../../errors");
const { ValidationError } = require("joi");

const updateCostumerController = {
    async handle(req, res) {
        try {
            const { id } = req.params;

            const costumer = await updateCostumerService.execute({
                ...req.body,
                id,
            });
            return res.status(200).json(costumer);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json(error.message);
            if (error instanceof NotFoundError)
                return res.status(404).json(error.message);
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = updateCostumerController;
