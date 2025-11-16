function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  return price * quantity * (1 - discount / 100);
}

console.log("--- Задание 1 ---")
console.log(calculateTotal(100, 2, 10));
console.log(calculateTotal(100, 2));