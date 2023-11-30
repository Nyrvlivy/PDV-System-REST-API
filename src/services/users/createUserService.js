const { usersRepository } = require("../../repositories");
const { validateUserCreate, verifyEmailExists } = require("../../utils");
const bcrypt = require("bcrypt");

const createUserService = {
    async execute(payload) {
        validateUserCreate(payload);
        await verifyEmailExists(payload.email);
        const hashedPassword = await bcrypt.hash(payload.senha, 6);

        const user = await usersRepository.create(
            payload.nome,
            payload.email,
            hashedPassword
        );
        delete user.senha;

        return user;
    },
};

module.exports = createUserService;
