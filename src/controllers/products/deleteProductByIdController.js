const deleteProductByIdService = require("../../services/products/deleteProductByIdService");

const deleteProductByIdController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const product = await deleteProductByIdService.execute(id);
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },
};

module.exports = deleteProductByIdController;