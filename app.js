class ProductManager {
  constructor() {
      this.products = [];
      this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, stock, code) {
      if (!title || !description || !price || !thumbnail || !stock || !code) {
          console.error('Todos los campos son obligatorios');
          return;
      }

      if (this.products.some(product => product.code === code)) {
          console.error('El producto con este código ya existe');
          return;
      }

      const newProduct = {
          id: this.nextId++,
          title,
          description,
          price,
          thumbnail,
          stock,
          code
      };

      this.products.push(newProduct);
      console.log(`Producto ${title} agregado con éxito`);
  }

  getProducts() {
      return this.products;
  }

  getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
          console.error('Not found');
          return null;
      }
      return product;
  }
}


const manager = new ProductManager();

manager.addProduct('Kettlebell 4kg', 'Kettlebell de 4 kilos', 20, 'ruta/a/imagen4kg.jpg', 10, 'KB4');
manager.addProduct('Kettlebell 8kg', 'Kettlebell de 8 kilos', 25, 'ruta/a/imagen8kg.jpg', 10, 'KB8');manager.addProduct('Kettlebell 12kg', 'Kettlebell de 12 kilos', 30, 'ruta/a/imagen12kg.jpg', 10, 'KB12');
manager.addProduct('Kettlebell 16kg', 'Kettlebell de 16 kilos', 35, 'ruta/a/imagen16kg.jpg', 10, 'KB16');
manager.addProduct('Kettlebell 20kg', 'Kettlebell de 20 kilos', 40, 'ruta/a/imagen20kg.jpg', 10, 'KB20');
manager.addProduct('Kettlebell 24kg', 'Kettlebell de 24 kilos', 45, 'ruta/a/imagen24kg.jpg', 10, 'K24');


console.log('Todos los productos:', manager.getProducts());
console.log('Producto con ID 1:', manager.getProductById(1));
