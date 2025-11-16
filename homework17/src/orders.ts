interface Order {
  orderId: string;
  amount: number;
  status: "pending" | "shipped" | "delivered";
}

const orders: Order[] = [
  { orderId: "A1", amount: 100, status: "pending" },
  { orderId: "A2", amount: 200, status: "shipped" },
  { orderId: "A3", amount: 150, status: "delivered" },
  { orderId: "A4", amount: 120, status: "pending" },
];

function filterOrdersByStatus(
  orderList: Order[],
  status: "pending" | "shipped" | "delivered"
): Order[] {
  return orderList.filter((order) => order.status === status);
}

console.log("--- Задание 3 ---")
console.log(filterOrdersByStatus(orders, "pending"));