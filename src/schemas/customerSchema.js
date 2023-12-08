const joi = require("joi");
const createCustomerSchema = joi.object({
    nome: joi.string().min(3).required().messages({
        "string.base": "Nome deve ser uma string!",
        "string.empty": "Nome é um campo obrigatório!",
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
    cep: joi
        .string()
        .pattern(/^[0-9]{8}$/)
        .allow("")
        .messages({
            "string.base": "CEP deve ser uma string!",
            "string.pattern.base": "CEP deve ter 8 caracteres numéricos!",
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
    estado: joi.string().allow("").messages({
        "string.base": "Estado deve ser uma string!",
    }),
});

const updateCustomerSchema = createCustomerSchema.concat(
    joi.object({
        id: joi.number().integer().required().messages({
            "number.base": "Id deve ser um número!",
            "number.integer": "Id deve ser um número inteiro!",
            "any.required": "Id é um campo obrigatório!",
        }),
    })
);

module.exports = {
    createCustomerSchema,
    updateCustomerSchema,
};
