"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        static calculateMonthlyPayment(principal, rate, years) {
            const monthlyRate = rate / 12 / 100;
            const months = years * 12;
            return ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        static calculateTax(income, rate) {
            return income * (rate / 100);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
console.log("--- Задание 2 ---");
const loan = Finance.LoanCalculator.calculateMonthlyPayment(10000, 5, 2);
console.log(`Ежемесячный платёж по кредиту: €${loan.toFixed(2)}`);
const tax = Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Налог на доход: €${tax}`);
