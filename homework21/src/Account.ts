// Задание 4

abstract class Account {
  protected balance: number = 0;
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(interestRate: number) {
    super();
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}, new balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(
      `Interest applied: ${interest.toFixed(
        2
      )}, new balance: ${this.balance.toFixed(2)}`
    );
  }
}

class CheckingAccount extends Account {
  private fee: number;

  constructor(fee: number) {
    super();
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
      console.log(
        `Withdraw ${amount} (+fee ${this.fee}), new balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds including fee");
    }
  }
}

console.log("--- Задание 4 ---")

const savings = new SavingsAccount(10);
savings.deposit(1000);
savings.applyInterest();
savings.withdraw(300);

const checking = new CheckingAccount(2);
checking.deposit(500);
checking.withdraw(100);