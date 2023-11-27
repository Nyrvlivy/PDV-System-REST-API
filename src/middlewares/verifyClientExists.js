const repository = require("../repositories/usersRepository");

const verifyClientExists = async (req, res, next) => {
    const { id } = req.params;

    const clientFound = await repository.getById(id);

    if (!clientFound) return res.status(404).json({error: "Cliente não encontrado."});

    return next();
}

module.exports = verifyClientExists;