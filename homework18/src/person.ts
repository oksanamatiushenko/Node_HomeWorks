interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Oksana",
  lastName: "Matiushenko",
  grade: 5,
};

function printStudentInfo(student: Student): void {
  console.log(`Имя: ${student.firstName} ${student.lastName}`);
  console.log(`Оценка: ${student.grade}`);
}

console.log("--- Задание 5 ---")
printStudentInfo(student);