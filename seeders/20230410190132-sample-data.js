const categories = require("../sampleData").categories;
const products = require("../sampleData").products;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", categories.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));

    await queryInterface.bulkInsert("Products", products.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
}; 