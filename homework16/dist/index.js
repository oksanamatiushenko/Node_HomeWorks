"use strict";
//======================= Задание 1 ===========================
function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Oksana");
function printPersonInfo(person) {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}
const person = {
    name: "Oksana",
    age: 33,
    city: "Kharkiv",
};
printPersonInfo(person);
//======================== Задание 3 ==========================
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(2));
//======================== Задание 4 ==========================
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
const student = {
    name: "Nataliia",
    grade: 5,
};
printStudentInfo(student);
//======================= Задание 6 ===========================
function logMessage(message) {
    console.log(message);
}
const message = "Hello World!";
logMessage(message);
