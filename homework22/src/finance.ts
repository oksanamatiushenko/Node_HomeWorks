export namespace Finance {
  export class LoanCalculator {
    static calculateMonthlyPayment(
      principal: number,
      rate: number,
      years: number
    ): number {
      const monthlyRate = rate / 12 / 100;
      const months = years * 12;
      return (
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      );
    }
  }

  export class TaxCalculator {
    static calculateTax(income: number, rate: number): number {
      return income * (rate / 100);
    }
  }
}

console.log("--- Задание 2 ---");
const loan = Finance.LoanCalculator.calculateMonthlyPayment(10000, 5, 2);
console.log(`Ежемесячный платёж по кредиту: €${loan.toFixed(2)}`);

const tax = Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Налог на доход: €${tax}`);