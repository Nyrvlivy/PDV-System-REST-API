const { updateProductService } = require("../../services");
const { InvalidParamError } = require("../../errors");
const { ValidationError } = require("joi");

const updateProductController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const updateProduct = await updateProductService.execute({
                ...req.body,
                id,
            });
            return res.status(200).json(updateProduct);
        } catch (error) {
            if (
                error instanceof InvalidParamError ||
                error instanceof ValidationError
            )
                return res.status(400).json({ error: error.message });
            return res.status(500).json({ error: error.message }); //
        }
    },
};

module.exports = updateProductController;
