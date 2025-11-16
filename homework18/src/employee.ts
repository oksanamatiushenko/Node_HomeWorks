interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 3000 },
  { name: "Ana", salary: 4000 },
  { name: "Kate", salary: 3500 },
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map(emp => emp.salary);
}

console.log("--- Задание 4 ---")
console.log(getSalaries(employees));