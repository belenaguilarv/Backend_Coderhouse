/*const ProductManager = require('./ProductManager.js');

const productManager = new ProductManager('products.json');

// Agregar un producto
const newProduct = productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 100,
  thumbnail: 'https://via.placeholder.com/150',
  code: 'P1',
  stock: 10,
});
console.log('Nuevo producto agregado: ', newProduct);

// Obtener todos los productos
const products = productManager.getProducts();
console.log('Lista de productos: ', products);

// Obtener un producto por id
const productId = 1;
const productById = productManager.getProductById(productId);
console.log(`Producto con id ${productId}: `, productById);

// Actualizar un producto
const productIdToUpdate = 1;
const fieldsToUpdate = {
  title: 'Producto actualizado',
  price: 200,
};
const updatedProduct = productManager.updateProduct(productIdToUpdate, fieldsToUpdate);
console.log(`Producto actualizado con id ${productIdToUpdate}: `, updatedProduct);

// Eliminar un producto
const productIdToDelete = 1;
productManager.deleteProduct(productIdToDelete);
console.log(`Producto eliminado con id ${productIdToDelete}`);
*/