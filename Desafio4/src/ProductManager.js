const fs = require('fs/promises');

class ProductManager {
  constructor() {
    this.filePath = '../data/products.json';
  }

  async getProducts(limit = null) {
    try {
      const data = await fs.readFile(this.filePath);
      let products = JSON.parse(data);

      if (limit !== null) {
        products = products.slice(0, limit);
      }

      return products;
    } catch (err) {
      console.error(`Error reading file: ${err}`);
      return null;
    }
  }

  async getProductById(productId) {
    try {
      const data = await fs.readFile(this.filePath);
      const products = JSON.parse(data);
      const product = products.find(p => p.id == productId);

      return product;
    } catch (err) {
      console.error(`Error reading file: ${err}`);
      return null;
    }
  }
}

module.exports = ProductManager;
