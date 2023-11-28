const { usersRepository } = require("../../repositories");
const { validateUserUpdate } = require("../../utils");
const bcrypt = require("bcrypt");

const updateUserService = async (userParams) => {
    validateUserUpdate(userParams);
    const { id, nome, email, senha } = userParams;

    const userExists = await usersRepository.getByEmail(id);
    if (userExists) throw new Error("Email já está em uso")

    const hashedPassword = await bcrypt.hash(senha, 6);

    const user = await usersRepository.update(id, nome, email, hashedPassword);
    return user;
};

module.exports = updateUserService;
