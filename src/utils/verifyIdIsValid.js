const { MissingParamError, InvalidParamError } = require("../errors");

const verifyIdIsValid = (id) => {
    if (!id) throw new MissingParamError("Id não informado");
    if (isNaN(id)) {
        throw new InvalidParamError("Id inválido");
    }
};

module.exports = verifyIdIsValid;
