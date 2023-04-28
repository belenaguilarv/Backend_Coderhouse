/**
    -- Enunciado -- 

    Realizar una clase “ProductManager” que gestione un conjunto de productos. 
    Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

    Cada producto que gestione debe contar con las propiedades:
    title (nombre del producto)
    description (descripción del producto)
    price (precio)
    thumbnail (ruta de imagen)
    code (código identificador)
    stock (número de piezas disponibles)

    Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial. 
    Validar que no se repita el campo “code” y que todos los campos sean obligatorios.
    
    Al agregarlo, debe crearse con un id autoincrementable
    - Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados 
      hasta ese momento
    - Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con 
      el id
    
    En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    Debe ser un Archivo de Javascript listo para ejecutarse desde node.
*/

class ProductManager{
    constructor(){
        this.products = []; 
        this.productId = 0;  
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
    addProduct(product){
      // Validaciones
      if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
        console.error('Todos los campos son obligatorios');
        return;
      }
      const existingProduct = this.products.find(value => value.code === product.code)
      if(existingProduct){
        console.error(`El producto con el codigo ${product.code} ya existe`);
        return;
      }
      const newProduct = {
        id: this.productId,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock  
      };

      // se agrega un producto autoincrementando id
      this.products.push(newProduct);
      this.productId++;
    }

    /**
      Metodo que devuelve el arreglo con todos los productos creados 
      hasta ese momento
      @returns {array} - Arreglo con los productos creados
    */
    getProducts(){
      return this.products;
    }

    /**
      Metodo que debe buscar en el arreglo el producto que coincida con 
      el id
      @param {number} id - El identificador del producto que se esta buscando 
      @returns {object / null} - Objeto con todas las propiedades del producto si es encontrado, 
      de lo contrario retorna null.
     */
    getProductById(id){
      const product = this.products.find(value => value.id === id);
      if(product)
        return product;
      else
      console.error(`El producto con id: ${id} no fue encontrado`);
      return null;
    }
  }


//  --  Testing -- 

const productManager = new ProductManager();

//console.log(productManager.getProducts());

// Agregar producto
productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});



// Agregar producto
productManager.addProduct({
  title: "producto prueba 1",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "423",
  stock: 25,
});


//console.log(productManager.getProducts());

// Obtener producto por id (debería devolver el producto agregado)
//console.log(productManager.getProductById(1));

// Obtener producto por id inexistente (debería arrojar un error)
console.log(productManager.getProductById(2));
