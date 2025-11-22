type ProductInfo = [string, number, number];

interface Inventory {
  [productName: string]: number;
}

function updateStock(
  inventory: Inventory,
  productInfo: ProductInfo
): Inventory {
  const [name, , stockChange] = productInfo;

  if (!inventory[name]) {
    inventory[name] = stockChange;
  } else {
    inventory[name] += stockChange; 
  }

  return inventory;
}

const inventory: Inventory = { Phone: 10 };

console.log("--- Задание 4 ---")
console.log(updateStock(inventory, ["Phone", 500, 25]));
console.log(updateStock(inventory, ["Laptop", 2000, 5]));
console.log(updateStock(inventory, ["Tablet", 1000, 20]));
