type Status= "pending" | "shipped" |  "delivered";

interface Order {
  orderId: string;
  amount: number;
  status: Status;
}

const orders: Order[] = [
  { orderId: "A1", amount: 100, status: "pending" },
  { orderId: "A2", amount: 200, status: "shipped" },
  { orderId: "A3", amount: 150, status: "delivered" },
  { orderId: "A4", amount: 120, status: "pending" },
];

function filterOrdersByStatus(
  orderList: Order[], status: Status): Order[] {
  return orderList.filter((order) => order.status === status);
}

console.log("--- Задание 3 ---")
console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "shipped"));
console.log(filterOrdersByStatus(orders, "delivered"));
