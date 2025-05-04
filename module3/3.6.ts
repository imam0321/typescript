{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; // protected if use child class this balance then use protected

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // getter
    get Balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const poorManAccount = new BankAccount(111, "Mr. X", 200);

  poorManAccount.deposit = 50;

  const myBalance = poorManAccount.Balance;
  console.log(myBalance);
}
