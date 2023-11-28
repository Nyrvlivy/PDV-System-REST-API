const { usersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const validateUserExists = async (email) => {
    const userExists = await usersRepository.getByEmail(email);
    if (userExists) throw new InvalidParamError("Email já cadastrado");
};

module.exports = validateUserExists;
