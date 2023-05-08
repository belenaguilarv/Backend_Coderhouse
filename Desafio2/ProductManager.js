const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
  }


   /**
      Metodo que agrega un nuevo producto al arreglo de productos.
      @param {Object} producto - Un objeto que representa un producto, con las propiedades:
      - title (nombre del producto)
      - description (descripción del producto)
      - price (precio)
      - thumbnail (ruta de imagen)
      - code (código identificador)
      - stock (número de piezas disponibles)
    */
  addProduct(product) {
    const products = this.getProducts();
    const newProduct = {
      id: products.length + 1,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
    };
    products.push(newProduct);
    this._saveProducts(products);
    return newProduct;
  }

  /**
    Metodo que devuelve el arreglo con todos los productos creados 
    hasta ese momento
    @returns {object} - Arreglo con los productos creados
  */  
  getProducts() {
    try {
      const products = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(products);
    } catch (err) {
      console.log('Error al leer el archivo de productos: ', err);
      return [];
    }
  }

  /**
    Metodo que debe buscar en el arreglo el producto que coincida con 
    el id
    @param {number} id - El identificador del producto que se esta buscando 
    @returns {object / null} - Objeto con todas las propiedades del producto 
                              si es encontrado, de lo contrario retorna null.
  */
  getProductById(id) {
    const products = this.getProducts();
    const product = products.find((p) => p.id === id);
    return product;
  }

/**
    Metodo que debe actualiza los valores en el arreglo el producto que coincida con 
    el id
    @param {number} id - El identificador del producto que se esta buscando 
    @param {object} fieldsToUpdate - Los campos a actualizar 
    @returns {object / null} - Devuelve el objeto "updatedProduct" si se 
    actualiza correctamente o "null" si el producto no se encuentra en la lista.
  */
  updateProduct(id, fieldsToUpdate) {
    const products = this.getProducts();
    const productIndex = products.findIndex((p) => p.id === id); // para encontrar el id del producto que deseo actualizar
    if (productIndex !== -1) {      // si esta en la lista creo un nuevo producto
      const updatedProduct = {
        ...products[productIndex],
        ...fieldsToUpdate,
        id,
      };
      products[productIndex] = updatedProduct;
      this._saveProducts(products);
      return updatedProduct;
    }
    return null;
  }


  /**
    Metodo que elimina el arreglo el producto que coincida con el id
    @param {number} id - El identificador del producto que se esta buscando 
  */
  deleteProduct(id) {
    let products = this.getProducts();              // obtengo todos los productos
    products = products.filter((p) => p.id !== id); // filtro para eliminar los que tengan el mismo id
    this._saveProducts(products);                   // guardo los productos que quedan
  }

/** 
  Método privado de la clase ProductManager que se encarga de guardar los productos en un archivo 
  utilizando el módulo fs de Node.js. 
  @param {object} - Arreglo con los productos 
*/
  _saveProducts(products) {
    const productsString = JSON.stringify(products, null, 2); // convierte el arreglo a formato JSON
    fs.writeFileSync(this.path, productsString); //escribir el archivo en la ruta especificada en la propiedad this.path de la instancia de ProductManager.
  }
}

module.exports = ProductManager;
