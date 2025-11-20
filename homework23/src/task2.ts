function processString(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, Math.random() * 1000);
  });
}

async function processAllStrings(array: string[]) {
  const promises = array.map((str) => processString(str));
  const results = await Promise.all(promises);
  console.log("Результат:", results);
}
console.log("--- Задание 2 ---")
processAllStrings(["hello", "world", "typescript"]);