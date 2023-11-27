const { detailingUserLoggedService } = require("../../services");

const detailingUserLoggedController = {
    async handle ( req, res ) {

        try {
            const { id } = req.userLogged;

            const userDetail = await detailingUserLoggedService.execute( id );

            return res.status(200).json( userDetail );
        } catch {
            return res.status(500).json({ mensagem: "Erro interno do servidor!" });
        }
    }
}

module.exports = detailingUserLoggedController;