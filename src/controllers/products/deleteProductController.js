const { deleteProductService } = require("../../services");
const {
    MissingParamError,
    InvalidParamError,
    NotFoundError,
} = require("../../errors");

const deleteProductController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            await deleteProductService.execute(id);

            res.status(204).end();
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
            res.status(500).json({ error: "Erro interno no servidor." });
        }
    },
};

module.exports = deleteProductController;
