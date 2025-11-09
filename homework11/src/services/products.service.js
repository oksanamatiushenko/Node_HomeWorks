let products = [
  { id: 1, name: "Product One", price: 29.99 },
  { id: 2, name: "Product Two", price: 49.99 },
];

export const getProducts = () => products;

export const getProductById = (id) => products.find((p) => p.id === id);

export const addProduct = (payload) => {
  const newProduct = { id: products.length + 1, ...payload };
  products.push(newProduct);
  return newProduct;
};

export const updateProductById = (id, payload) => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...payload };
  return products[index];
};

export const deleteProductById = (id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const deleted = products.splice(index, 1);
  return deleted[0];
};
