const { getAllCategoriesService } = require("../../services");

const getAllCategoriesController = {
    async handle(req, res) {
        try {
            const categories = await getAllCategoriesService.execute();

            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = getAllCategoriesController;
