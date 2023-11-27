const { usersRepository } = require("../../repositories");
const { verifyClientExists } = require("../../utils");

const getUserProfileService = {
    async execute(id) {
        await verifyClientExists(id);

        const user = await usersRepository.getById(id);
        delete user.senha;

        return user;
    },
};

module.exports = getUserProfileService;
