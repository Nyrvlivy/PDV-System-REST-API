const { categoriesRepository } = require("../../repositories");

const getAllCategoriesService = {
  async execute() {
    const categories = await categoriesRepository.getAll();

    return categories;
  },
};

module.exports = getAllCategoriesService;
