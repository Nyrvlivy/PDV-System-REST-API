const joi = require("joi");

const userSchema = joi.object({
    nome: joi.string().min(3).required().messages({
        "string.base": "Nome deve ser uma string!",
        "string.empty": "Nome não pode estar vazio!",
        "string.min": "Nome deve ter no mínimo 3 caracteres!",
        "any.required": "Nome é um campo obrigatório!",
    }),
    email: joi
        .string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.base": "E-mail deve ser uma string!",
            "string.empty": "E-mail é um campo obrigatório!",
            "string.email": "Por favor, insira um e-mail válido!",
            "any.required": "E-mail é um campo obrigatório!",
        }),
    senha: joi.string().min(6, "utf8").required().messages({
        "string.base": "Senha deve ser uma string!",
        "string.empty": "Senha é um campo obrigatório!",
        "string.min": "Senha deve ter no mínimo 6 caracteres!",
        "any.required": "Senha é um campo obrigatório!",
    }),
});

const updateUserSchema = userSchema.concat(
    joi.object({
        id: joi.number().integer().required().messages({
            "number.base": "Id deve ser um número!",
            "number.integer": "Id deve ser um número inteiro!",
            "any.required": "Id é um campo obrigatório!",
        }),
    })
);

module.exports = { userSchema, updateUserSchema };
