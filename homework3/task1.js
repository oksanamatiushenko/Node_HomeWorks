import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Error by created catalog:", err);
    return;
  }
  console.log("Catalog successfully created!");

  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.error("Error by deleted:", err);
      return;
    }
    console.log("Catalog myFolder successfully deleted!");
  });
});


// Задача 1
// Создание и удаление каталога
// Создайте новый файл для скрипта, например, `task1.js`.
// Импортируйте модуль `fs`.
// Создайте каталог с именем `myFolder` в текущей директории.
// Используйте метод `fs.mkdir` для создания каталога.
// В функции обратного вызова (callback) обработайте возможные 
// ошибки и выведите сообщение о успешном создании.
// Удалите каталог `myFolder`.
// Используйте метод `fs.rmdir` для удаления каталога.
// В функции обратного вызова (callback) обработайте возможные 
// ошибки и выведите сообщение о успешном удалении.