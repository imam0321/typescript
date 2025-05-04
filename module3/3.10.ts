{
  // Encapsulation

  // *** Encapsulation means keeping data and methods safe inside a class and controlling access to them.

  class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }

    public deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
      }
    }

    public getBalance(): number {
      return this.balance;
    }
  }

  const account = new BankAccount(1000);
  account.deposit(500);
  console.log("Current Balance:", account.getBalance());

  // ❌ This would give an error because balance is private:
  // console.log(account.balance);
}
