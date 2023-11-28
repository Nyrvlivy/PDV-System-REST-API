const joi = require("joi");

const validarCampos = async (dados) => {
    const camposObrigatorios = joi.object({
        nome: joi.string().required().messages({
            "any.required": "O campo nome é obrigatório.",
            "string.empty": "O campo nome é obrigatório.",
        }),
        email: joi.string().email().required().messages({
            "any.required": "O campo email é obrigatório.",
            "string.email": "Digite um email válido.",
            "string.empty": "O campo email é obrigatório.",
        }),
        senha: joi.string().required().messages({
            "any.required": "O campo senha é obrigatório.",
            "string.empty": "O campo senha é obrigatório.",
        }),
    });

    try {
        await camposObrigatorios.validateAsync(dados);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports =
    validarCampos;