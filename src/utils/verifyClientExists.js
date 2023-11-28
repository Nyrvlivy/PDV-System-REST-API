const repository = require("../repositories/usersRepository");

const verifyClientExists = async (id) => {
    const clientFound = await repository.getById(id);

    if (!clientFound)
        return res.status(404).json({ error: "Usuário não encontrado." });
};

module.exports = verifyClientExists;
