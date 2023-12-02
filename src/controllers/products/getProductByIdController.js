const getProductByIdService = require("../../services/products/getProductByIdService");

const getProductByIdController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const product = await getProductByIdService.execute(id);
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },
};

module.exports = getProductByIdController;