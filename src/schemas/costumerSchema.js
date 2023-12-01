const joi = require("joi");
const createCostumerSchema = joi.object({
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
    cpf: joi
        .string()
        .pattern(/^[0-9]{11}$/)
        .required()
        .messages({
            "string.base": "CPF deve ser uma string!",
            "string.empty": "CPF é um campo obrigatório!",
            "string.pattern.base": "CPF deve ter 11 caracteres numéricos!",
            "any.required": "CPF é um campo obrigatório!",
        }),
    cep: joi.string().length(8).allow("").messages({
        "string.base": "CEP deve ser uma string!",
        "string.length": "CEP deve ter 8 caracteres!",
    }),
    rua: joi.string().allow("").messages({
        "string.base": "Rua deve ser uma string!",
    }),
    numero: joi.number().integer().allow(null).messages({
        "number.base": "Número deve ser um número!",
        "number.integer": "Número deve ser um número inteiro!",
    }),
    bairro: joi.string().allow("").messages({
        "string.base": "Bairro deve ser uma string!",
    }),
    cidade: joi.string().allow("").messages({
        "string.base": "Cidade deve ser uma string!",
    }),
    estado: joi.string().length(2).allow("").messages({
        "string.base": "Estado deve ser uma string!",
        "string.length": "Estado deve ser uma sigla de 2 caracteres!",
    }),
});

module.exports = { createCostumerSchema };
