const delay = (ms: number, value: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Завершен: ${value}`);
      resolve(value);
    }, ms);
  });
};

async function runSequentially() {
  const result1 = await delay(1000, "One");
  const result2 = await delay(500, "Two");
  const result3 = await delay(800, "Three");

  console.log("Все выполнены:", result1, result2, result3);
}

console.log("--- Задание 1 ---")
runSequentially();