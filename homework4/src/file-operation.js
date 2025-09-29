import fs from "fs/promises";
import "dotenv/config";

const filename = process.env.FILENAME;
const text = "Привет МИР!";

async function writeAndRead() {
  try {
    await fs.writeFile(filename, text, "utf8");
    console.log(`Файл ${filename} создан!`);
    const content = await fs.readFile(filename, "utf8");
    console.log(`Содержимое файла: ${content}`);
  } catch (err) {
    console.error("Ошибка при записи или чтении файла:", err.message);
  }
}
writeAndRead();
