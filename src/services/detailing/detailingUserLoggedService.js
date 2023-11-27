const { usersRepository } = require("../../repositories");
const { verifyClientExists } = require("../../utils");

const detailingUserLoggedService = {
    async execute( id ) {

        await verifyClientExists( id );

        const { userPassword: _, ...userDetail } = await usersRepository.getById( id )

        return userDetail.rows[0];
    }
}

module.exports = detailingUserLoggedService;