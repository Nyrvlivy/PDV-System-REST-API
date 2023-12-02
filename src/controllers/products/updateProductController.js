const { updateProductService } = require("../../services");
const { InvalidParamError } = require("../../errors");
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
            console.log(error);
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
