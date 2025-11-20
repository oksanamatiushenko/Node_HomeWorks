function successAfter(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function failAfter(ms: number, message: string): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(message)), ms)
  );
}

async function runWithErrorHandling() {
  try {
    const results = await Promise.all([
      successAfter(500, "OK 1"),
      failAfter(300, "Promise Error"),
      successAfter(400, "OK 2"),
    ]);
    console.log("Результаты:", results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Неизвестная ошибка", error);
    }
  }
}

console.log("--- Задание 3 ---")
runWithErrorHandling();