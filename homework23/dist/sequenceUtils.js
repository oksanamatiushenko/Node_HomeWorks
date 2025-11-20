"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = generateFibonacci;
exports.generatePrimeNumbers = generatePrimeNumbers;
function generateFibonacci(limit) {
    const result = [0, 1];
    while (result[result.length - 1] + result[result.length - 2] <= limit) {
        result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
}
function generatePrimeNumbers(limit) {
    const result = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            result.push(num);
    }
    return result;
}
console.log("--- Задание 4 ---");
console.log("Фибоначчи:", generateFibonacci(50));
console.log("Простые числа:", generatePrimeNumbers(30));
