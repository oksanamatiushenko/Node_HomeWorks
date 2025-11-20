function wait(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

async function dynamicTimeouts(numbers: number[]) {
  const promises = numbers.map((num) => wait(num));
  const results = await Promise.all(promises);
  console.log("Все завершены (мс):", results);
}

console.log("--- Задание 4 ---")
dynamicTimeouts([3000, 1000, 2000]);