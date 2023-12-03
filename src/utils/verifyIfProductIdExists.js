const repository = require("../repositories/productsRepository");

const verifyIfProductIdExists = async (id) => {
    const productId = await repository.getById(id);
    if (!productId) {
        return res.status(404).json({ error: "Este produto não existe" });
    }
};

module.exports = verifyIfProductIdExists;