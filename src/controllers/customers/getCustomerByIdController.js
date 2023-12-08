const { getCustomerByIdService } = require("../../services");
const {
    MissingParamError,
    InvalidParamError,
    NotFoundError,
} = require("../../errors");

const getCustomerByIdController = {
    async handle(req, res) {
        try {
            const { id } = req.params;
            const customer = await getCustomerByIdService.execute(id);

            return res.status(200).json(customer);
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
module.exports = getCustomerByIdController;
