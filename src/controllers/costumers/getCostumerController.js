const getCostumerService = require("../../services/costumers/getCostumerService");

const getCostumerController = {
    async handle(req, res) {
        try {
            const costumer = await getCostumerService.execute();

            if (!costumer) {
                return res.status(404).json("Não há clientes cadastrados")
            }

            return res.status(200).json(costumer);
        } catch (error) {
            return res.status(500).json("Erro interno do servidor");
        }
    }
}
module.exports = getCostumerController;