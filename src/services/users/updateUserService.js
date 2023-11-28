const { usersRepository } = require("../../repositories");
const { validateUserUpdate, validateUserExists } = require("../../utils");
const bcrypt = require("bcrypt");

const updateUserService = {
    async execute(payload) {
        validateUserUpdate(payload);
        const { id, nome, email, senha } = payload;

        await validateUserExists(payload.email);

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
