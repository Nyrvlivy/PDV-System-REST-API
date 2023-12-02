const { updateCostumerService } = require("../../services");
const { InvalidParamError, MissingParamError } = require("../../errors");
const { ValidationError } = require("joi");

const updateCostumerController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const payload = req.body;
    
            const costumer = await updateCostumerService.execute({ payload, id });
            return res.status(200).json(costumer);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof MissingParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json(error.message);
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    }
};

module.exports = updateCostumerController;