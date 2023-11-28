const repository = require("../repositories/usersRepository");

const verifyUserExists = async (id) => {
    const userFound = await repository.getById(id);

    if (!userFound)
        return res.status(404).json({ error: "Usuário não encontrado." });
};

module.exports = verifyUserExists;
