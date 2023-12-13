const { getProductByIdService } = require("../../services");
const { MissingParamError, InvalidParamError } = require("../../errors");
const { NotFoundError } = require("../../errors");

const getProductByIdController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const product = await getProductByIdService.execute(id);
            return res.status(200).json(product);
        } catch (error) {
            if (
                error instanceof MissingParamError ||
                error instanceof InvalidParamError
            ) {
                return res.status(400).json({ error: error.message });
            }
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res
                .status(500)
                .json({ error: "Erro interno no servidor." });
        }
    },
};

module.exports = getProductByIdController;
