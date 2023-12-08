const { getAllCustomersService } = require("../../services");

const getAllCustomersController = {
    async handle(req, res) {
        try {
            const customers = await getAllCustomersService.execute();

            return res.status(200).json(customers);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};
module.exports = getAllCustomersController;
