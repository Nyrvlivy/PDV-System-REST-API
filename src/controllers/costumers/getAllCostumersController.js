const { getAllCostumersService } = require("../../services");

const getAllCostumersController = {
    async handle(req, res) {
        try {
            const costumer = await getAllCostumersService.execute();

            return res.status(200).json(costumer);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};
module.exports = getAllCostumersController;
