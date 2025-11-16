//======================= Задание 1 ===========================

function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

greetUser("Oksana");

//======================= Задание 2 ===========================

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
}

const person: Person = {
  name: "Oksana",
  age: 33,
  city: "Kharkiv",
};

printPersonInfo(person);

//======================== Задание 3 ==========================

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(2));

//======================== Задание 4 ==========================

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4));

//======================= Задание 5 ===========================

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

const student: Student = {
  name: "Nataliia",
  grade: 5,
};

printStudentInfo(student);

//======================= Задание 6 ===========================

function logMessage(message: string): void {
  console.log(message);
}

const message: string = "Hello World!";

logMessage(message);