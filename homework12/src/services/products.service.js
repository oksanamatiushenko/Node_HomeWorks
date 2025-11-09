import Product from "../db/models/Product.js";

export const getProducts = () => Product.find();

export const addProduct = payload => Product.create(payload);

export const getProductById = id => Product.findById(id);

export const updateProductById = (id, payload) => Product.findByIdAndUpdate(id, payload, {new: true});

export const deleteProductById = (id) => Product.findByIdAndDelete(id);