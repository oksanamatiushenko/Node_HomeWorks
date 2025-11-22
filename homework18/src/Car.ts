type Engine = {
  type: string;
  horsepower: number;
}
type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 120,
  },
  year: 2023,
};

function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.`);
  if (car.year !== undefined) {
    console.log(`Год выпуска: ${car.year}`);
  }
}

console.log("--- Задание 2 ---")
printCarInfo(car);
