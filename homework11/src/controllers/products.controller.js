import * as productsService from "../services/products.service.js";

export const getProductsController = (req, res) => {
  const result = productsService.getProducts();
  res.json(result);
};

export const getProductByIdController = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productsService.getProductById(id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const addProductController = (req, res) => {
  const product = productsService.addProduct(req.body);
  res.status(201).json(product);
};

export const deleteProductByIdController = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = productsService.deleteProductById(id);
  if (!deleted) return res.status(404).json({ message: "Product not found" });
  res.json(deleted);
};

