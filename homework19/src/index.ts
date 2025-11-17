// Задание 1
const sumEvenNumbers = (array: number[]): number => {
  return array.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
};

console.log("--- Задание 1 ---");
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Задание 2
interface StringToBooleanFunction {
  (input: string): boolean;
}

const isStringEmpty: StringToBooleanFunction = (str) => str.length === 0;

console.log("--- Задание 2 ---");
console.log(isStringEmpty(""));
console.log(isStringEmpty("hello"));

// Задание 3
type CompareStrings = (a: string, b: string) => boolean;

const areStringsEqual: CompareStrings = (a, b) => a === b;

console.log("--- Задание 3 ---");
console.log(areStringsEqual("test", "test"));
console.log(areStringsEqual("abc", "123"));

// Задание 4
const getLastElement = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log("--- Задание 4 ---");
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

// Задание 5
const makeTriple = <T>(first: T, second: T, third: T): T[] => {
  return [first, second, third];
};

console.log("--- Задание 5 ---");
console.log(makeTriple(1, 2, 3));
console.log(makeTriple("x", "y", "z"));
