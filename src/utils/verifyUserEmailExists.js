const { usersRepository } = require("../repositories");
const { InvalidParamError } = require("../errors");

const verifyEmailExists = async (email) => {
    const emailExists = await usersRepository.getByEmail(email);
    if (emailExists) throw new InvalidParamError("Email já cadastrado");
};

module.exports = verifyEmailExists;
