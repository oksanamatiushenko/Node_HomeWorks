import Product from "../models/Product.js";


export const addProduct = (payload) => Product.create(payload);
export const getProducts = () => Product.findAll();
export const getProductById = (id) => Product.findByPk(id);
