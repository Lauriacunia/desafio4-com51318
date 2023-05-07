const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async loadInitialProducts(products) {
    await this.write(products);
  }

  async getProducts() {
    return await this.read(this.file);
  }

  async getProductById(id) {
    let allProductsArray = await this.read(this.file);
    const product = allProductsArray.find((product) => product.id == id);
    return product;
  }

  async addProduct(newProduct) {
    let allProductsArray = await this.read(this.file);
    let nextId = await this.getNextId(allProductsArray);
    newProduct.id = nextId;
    newProduct.status = true;
    allProductsArray.push(newProduct);
    await this.write(allProductsArray);
    return newProduct;
  }

  async updateProduct(id, newProduct) {
    let allProductsArray = await this.read(this.file);
    console.log("productos", allProductsArray);
    const productToUpdate = allProductsArray.find(
      (product) => product.id == id
    );
    if (!productToUpdate) {
      //TODO: mejorar response
      console.log("producto no encontrado", productToUpdate);
      return { error: "Sorry, no product found by id: " + id };
    }
    const index = allProductsArray.indexOf(productToUpdate);
    allProductsArray[index] = newProduct;
    await this.write(allProductsArray);
    return newProduct;
  }

  updateProductFields(productToUpdate, newProduct) {
    /** 🗨 Los campos que se repiten los actualiza,
     * los que no (como el id) los deja igual */
    const updatedProduct = {
      ...productToUpdate,
      ...newProduct,
    };
    return updatedProduct;
  }

  async read() {
    let allProductsArray = [];
    try {
      let allProductsString = await fs.promises.readFile(this.path, "utf-8");
      allProductsString.length > 0
        ? (allProductsArray = JSON.parse(allProductsString))
        : (allProductsArray = []);
    } catch (err) {
      console.log("Error en la lectura del archivo", err);
    }
    return allProductsArray;
  }

  async write(allProductsArray) {
    let allProductsString = JSON.stringify(allProductsArray);
    try {
      await fs.promises.writeFile(this.path, allProductsString);
    } catch (err) {
      console.log("Error en la escritura", err);
    }
  }

  async getNextId(allProductsArray) {
    let lastId = 0;
    // recorro allProductsArray y guardo todos los ids en un array nuevo. Luego busco el máximo
    const allIdsArray = allProductsArray.map((product) => product.id);
    // me quedo solo con los id numericos, elimino los NaN, null y undefined
    allIdsArray.filter((id) => typeof id === "number");
    if (allIdsArray.length > 0) {
      lastId = Math.max(...allIdsArray);
    }
    return lastId + 1;
  }
}

module.exports = ProductManager;