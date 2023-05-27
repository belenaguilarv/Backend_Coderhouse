const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const port = 3000;

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
  const limit = req.query.limit || null;
  const products = await productManager.getProducts(limit);

  if (products !== null) {
    res.json(products);
  } else {
    res.sendStatus(500);
  }
});

app.get('/products/:pid', async (req, res) => {
  const productId = req.params.pid;
  const product = await productManager.getProductById(productId);

  if (product !== null) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
