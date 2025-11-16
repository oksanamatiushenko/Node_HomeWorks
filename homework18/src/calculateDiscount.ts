interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - product.price * (discount / 100);
}

const product: Product = { name: "Laptop", price: 1000 };

console.log("--- Задание 3 ---")
console.log(calculateDiscount(product, 15));