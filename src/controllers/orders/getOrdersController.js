const { getOrdersServices } = require("../../services");
const {
    MissingParamError,
    InvalidParamError,
    NotFoundError,
} = require("../../errors");

const getOrdersController = {
    async handle(req, res) {
        try {
            const { cliente_id } = req.query;
            const orders = await getOrdersServices.execute(cliente_id);

            return res.status(200).json(orders);
        } catch (error) {
            if (
                error instanceof MissingParamError ||
                error instanceof InvalidParamError
            )
                return res.status(400).json({ error: error.message });
            if (error instanceof NotFoundError)
                return res.status(404).json({ error: error.message });
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = getOrdersController;
