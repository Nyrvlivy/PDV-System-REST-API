const { getCostumerByIdService } = require("../../services");


const getCostumerByIdController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const costumer = await getCostumerByIdService.execute(id);

            if (!costumer) {
                return res.status(404).json("Cliente não encontrado")
            }

            return res.status(200).json(costumer);
        } catch (error) {
            console.log(error)
            return res.status(500).json("Erro interno do servidor");
        }
    }
}
module.exports = getCostumerByIdController;