const { usersRepository } = require("../../repositories");
const { validateUserUpdate, verifyUserEmailExists } = require("../../utils");
const bcrypt = require("bcrypt");

const updateUserService = {
    async execute(payload) {
        validateUserUpdate(payload);
        const { id, nome, email, senha } = payload;

        await verifyUserEmailExists(payload.email);

        const hashedPassword = await bcrypt.hash(senha, 6);

        const user = await usersRepository.update(
            id,
            nome,
            email,
            hashedPassword
        );
        delete user.senha;
        return user;
    },
};

module.exports = updateUserService;
