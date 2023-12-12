const joi = require("joi");

const createProductSchema = joi.object({
    descricao: joi.string().min(3).required().messages({
        "string.base": "Descrição deve ser uma string!",
        "string.empty": "Descrição não pode estar vazio!",
        "string.min": "Descrição deve ter no mínimo 3 caracteres!",
        "any.required": "Descrição é um campo obrigatório!",
    }),
    quantidade_estoque: joi.number().integer().min(0).required().messages({
        "number.base": "Quantidade do estoque deve ser um número!",
        "number.integer": "Quantidade do estoque deve ser um número inteiro!",
        "number.min": "Quantidade do estoque deve ser maior ou igual a 0!",
        "number.empty": "Quantidade do estoque não pode estar vazio!",
        "any.required": "Quantidade do estoque é um campo obrigatório!",
    }),
    valor: joi.number().integer().min(1).required().messages({
        "number.base": "Valor deve ser um número!",
        "number.integer": "Valor deve ser um número inteiro e em centavos!",
        "number.min": "Valor deve ser maior que 0!",
        "number.empty": "Valor não pode estar vazio!",
        "any.required": "Valor é um campo obrigatório!",
    }),
    categoria_id: joi.number().integer().required().messages({
        "number.base": "Id da categoria deve ser um número!",
        "number.integer": "Id da categoria deve ser um número inteiro!",
        "number.empty": "Id da categoria não pode estar vazio!",
        "any.required": "Id da categoria é um campo obrigatório!",
    }),
    produto_imagem: joi
        .object({
            originalname: joi.string().allow("", null).optional(),
            buffer: joi.binary().required(),
            mimetype: joi.string().required(),
        })
        .allow(null)
        .optional()
        .messages({
            "object.base": "Envie uma imagem!",
            "any.required": "Imagem é um campo obrigatório!",
        }),
});

const updateProductSchema = createProductSchema.concat(
    joi.object({
        id: joi.number().integer().required().messages({
            "number.base": "Id deve ser um número!",
            "number.integer": "Id deve ser um número inteiro!",
            "any.required": "Id é um campo obrigatório!",
        }),
    })
);

module.exports = { createProductSchema, updateProductSchema };
