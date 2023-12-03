const { getAllProductsService } = require("../../services");
const { MissingParamError, InvalidParamError } = require("../../errors");

const getAllProductsController = {
    async handle(req, res) {
        try {
            const { categoria_id } = req.query;
            const products = await getAllProductsService.execute(categoria_id);
            return res.status(200).json(products);
        } catch (error) {
            if (
                error instanceof MissingParamError ||
                error instanceof InvalidParamError
            ) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    },
};

module.exports = getAllProductsController;
