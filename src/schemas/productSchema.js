const joi = require("joi");

const updateProductSchema = joi.object({
    descricao: joi.string().min(3).required().messages({
        "string.base": "Descrição deve conter texto!",
        "string.empty": "O campo descrição não pode estar vazio!",
        "string.min": "O campo descrição deve ter no mínimo 3 caracteres!",
        "any.required": "Descrição é um campo obrigatório",
    }),

    quantidade_estoque: joi.number().required().messages({
        "number.base": "Quantidade de estoque precisa ser um número!",
        "any.required": "Quantidade de estoque é um campo obrigatório!"
    }),

    valor: joi.string().min(6).required().messages({
        "number.base": "Valor deve ser um número!",
        "number.min": "Valor deve ser no mínimo 6 caracteres!",
        "any.required": "Valor é um campo obrigatório!"
    }),

    categoria_id: joi.string().min(6).required().messages({
        "string.base": "Categoria ID deve conter texto!",
        "string.empty": "O campo categoria ID não pode estar vazio!",
        "string.min": "Categoria ID deve ter no mínimo 6 caracteres!",
        "any.required": "Categoria ID é um campo obrigatório!",
    }),
});

module.exports = { updateProductSchema };

