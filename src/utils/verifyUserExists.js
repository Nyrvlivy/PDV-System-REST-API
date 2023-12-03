const { usersRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyUserExists = async (id) => {
    const userExists = await usersRepository.getById(id);
    if (!userExists) throw new NotFoundError("Usuário não encontrado.");
};

module.exports = verifyUserExists;
