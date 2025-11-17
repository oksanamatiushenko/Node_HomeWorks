// Задание 1 ================================
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  override sound(): void {
    console.log("The dog barks");
  }
}
console.log("--- Задание 1 ---");
const animal = new Animal("Lizzy", "cat");
console.log(animal)
animal.sound();

const myDog = new Dog("Bars", "dog", "labrador");
console.log(myDog)
myDog.sound();

// Задание 2 ================================
class Library {
  static totalBooks: number = 0;
  addBook(): void {
    Library.totalBooks += 1;
  }
  static getTotalBooks(): void {
    console.log(Library.totalBooks);
  }
}
const library1 = new Library();
const library2 = new Library();

library1.addBook();
library1.addBook();
library2.addBook();
library2.addBook();
library2.addBook();

console.log("--- Задание 2 ---");
Library.getTotalBooks();

// Задание 3 ================================
class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const myBike = new Motorcycle("Kawasaki", "Ninja ZX-6R", "Sport");

console.log("--- Задание 3 ---");
console.log(myBike.make);
console.log(myBike.model);
console.log(myBike.type);