import {
  getProducts,
  addProduct,
  getProductById,
} from "../services/products.service.js";

export const getProductsController = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};

export const addProductController = async (req, res) => {
  const newProduct = await addProduct(req.body);
  res.status(201).json(newProduct);
};

export const getProductsByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);
  if (!result) {
    return res.status(404).json({
      message: `Poduct with id${id} not found`,
    });
  }
  res.json(result);
};
