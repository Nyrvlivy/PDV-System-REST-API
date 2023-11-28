const { usersRepository } = require("../../repositories");
const { verifyUserExists } = require("../../utils");

const getUserProfileService = {
    async execute(id) {
        await verifyUserExists(id);

        const user = await usersRepository.getById(id);
        delete user.senha;

        return user;
    },
};

module.exports = getUserProfileService;
