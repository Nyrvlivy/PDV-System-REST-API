const { usersRepository } = require("../repositories");

const verifyUserExists = async (id) => {
    const userFound = await usersRepository.getById(id);

    if (!userFound)
        return res.status(404).json({ error: "Usuário não encontrado." });
};

module.exports = verifyUserExists;
