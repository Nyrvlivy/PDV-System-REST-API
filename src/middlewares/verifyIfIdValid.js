const repository = require("../repositories/usersRepository");

const verifyIfIdValid = async (req, res, next) => {
    const { id } = req.params;

    if(isNaN(id)) return res.status(400).json({error: "O id deve ser exclusivamente um número."});

    return next();
}

module.exports = verifyIfIdValid;