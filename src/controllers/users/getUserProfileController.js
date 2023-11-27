const { getUserProfileService } = require("../../services");

const getUserProfileController = {
    async handle(req, res) {
        try {
            const { id } = req.loggedUser;

            const userDetail = await getUserProfileService.execute(id);

            return res.status(200).json(userDetail);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ mensagem: "Erro interno do servidor!" });
        }
    },
};

module.exports = getUserProfileController;
