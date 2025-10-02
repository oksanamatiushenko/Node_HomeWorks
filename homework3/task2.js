import fs from "fs";

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error("Error by writing in file:", err);
    return;
  }
  console.log("File info.txt successfully writed!");

  fs.readFile("info.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error by reading:", err);
      return;
    }
    console.log("File content:", data);
  });
});


// Задача 2
// Чтение и запись файла
// Создайте новый файл для скрипта, например, `task2.js`.
// Импортируйте модуль `fs`.**
// Создайте файл с именем `info.txt` и запишите в него
// текст "Node.js is awesome!".
// Используйте метод `fs.writeFile` для записи текста в файл.
// В функции обратного вызова (callback) обработайте возможные
// ошибки и выведите сообщение о успешной записи.
// Прочитайте содержимое файла `info.txt`.
// Используйте метод `fs.readFile` для чтения содержимого файла.
// В функции обратного вызова (callback) обработайте возможные
// ошибки и выведите содержимое файла на консоль.

