const { updateProductService } = require("../../services");
const { InvalidParamError, NotFoundError } = require("../../errors");
const { ValidationError } = require("joi");

const updateProductController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const updatedProduct = await updateProductService.execute({
                ...req.body,
                id,
            });
            return res.status(200).json(updatedProduct);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json({ error: error.message });
            if (error instanceof NotFoundError)
                return res.status(404).json({ error: error.message });
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = updateProductController;
