const joi = require("joi");

const orderProductSchema = joi.object({
    produto_id: joi.number().integer().required().messages({
        "number.base": "Id do produto deve ser um número!",
        "number.integer": "Id do produto deve ser um número inteiro!",
        "any.required": "Id do produto é um campo obrigatório!",
    }),
    quantidade_produto: joi.number().integer().min(1).required().messages({
        "number.base": "Quantidade do produto deve ser um número inteiro!",
        "number.min": "Quantidade do produto deve ser maior que 0!",
        "any.required": "Quantidade do produto é um campo obrigatório!",
    }),
});

const createOrderSchema = joi.object({
    cliente_id: joi.number().integer().required().messages({
        "number.base": "Id do cliente deve ser um número!",
        "number.integer": "Id do cliente deve ser um número inteiro!",
        "any.required": "Id do cliente é um campo obrigatório!",
    }),
    observacao: joi.string().max(255).allow("", null).optional().messages({
        "string.base": "Observação deve ser uma string!",
        "string.max": "Observação deve ter no máximo 255 caracteres!",
    }),
    pedido_produtos: joi.array().items(orderProductSchema).required(),
});

module.exports = { createOrderSchema };
