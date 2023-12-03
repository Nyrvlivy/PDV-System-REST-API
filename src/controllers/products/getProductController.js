const getProductsService = require("../../services/products/getProductsService");

const getProductController = {
    async handle(req, res) {
        try {
            const { categoria_id } = req.params;
            const product = await getProductsService.execute(categoria_id);
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },
};

module.exports = getProductController;