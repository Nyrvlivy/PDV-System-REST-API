const { productRepository, categoriesRepository } = require("../repositories");

async function productExists(id) {
    const product = await productRepository.findByPk(id);

    if (!product) {
        throw new Error('Produto não encontrado.');
    }
}

function validateMandatoryFields(produto) {
    const { descricao, quantidade_estoque, valor, categoria_id } = produto;

    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
        throw new Error('Todos os campos obrigatórios devem ser fornecidos.');
    }
}

async function validateExistingCategory(categoria_id) {
    const categoriaExiste = await categoriesRepository.getById(categoria_id);
    if (!categoriaExiste) {
        throw new Error('A categoria informada não existe.');
    }
}

module.exports = {
    productExists,
    validateMandatoryFields,
    validateExistingCategory,
};
