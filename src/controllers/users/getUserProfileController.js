const { getUserProfileService } = require("../../services");
const { NotFoundError } = require("../../errors");

const getUserProfileController = {
    async handle(req, res) {
        try {
            const { id } = req.loggedUser;

            const userProfile = await getUserProfileService.execute(id);

            return res.status(200).json(userProfile);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
};

module.exports = getUserProfileController;
