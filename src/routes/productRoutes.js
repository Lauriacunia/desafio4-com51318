const { Router } = require("express");
const router = Router();
const ProductManager = require("./../productManager.js");
const { validateNumber } = require("./../utils/helpers.js");
const path = "src/db/products.json";
const myProductManager = new ProductManager(path);

router.get("/", async (req, res) => {
  try {
    const products = await myProductManager.getProducts();
    const limit = req.query.limit;
    const isValidLimit = validateNumber(limit);
    products
      ? isValidLimit
        ? res.json(products.slice(0, limit))
        : res.json(products)
      : res.json({ error: "Sorry, no products found" });
  } catch (err) {
    console.log("getProducts", err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const isValidId = validateNumber(id);
    if (!isValidId) {
      res.json({ error: "Sorry, invalid id" });
      return;
    }
    const product = await myProductManager.getProductById(req.params.id);
    product
      ? res.json(product)
      : res.json({ error: "Sorry, no product found by id: " + req.params.id });
  } catch (err) {
    console.log("getProductById", err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const productCreated = await myProductManager.addProduct(newProduct);
    productCreated
      ? res.status(201).json({
          status: "success",
          payload: productCreated,
        })
      : res.json({
          status: "error",
        });
  } catch (err) {
    res.status(err.status || 500).json({
      status: "error",
      payload: err.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const isValidId = validateNumber(id);
    if (!isValidId) {
      res.json({ error: "Sorry, invalid id" });
      return;
    }
    const newProduct = req.body;
    const productUpdated = await myProductManager.updateProduct(id, newProduct);
    res.status(200).json({
      status: "success",
      payload: productUpdated,
    });
  } catch (err) {
    res.status(err.status || 500).json({
      status: "error",
      payload: err.message,
    });
  }
});

module.exports = router;
