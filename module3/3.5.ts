{
  // access modifiers

  class BankAccount {
    public readonly id: number; // id not modify juts read
    public name: string;
    private _balance: number; // private can be access inside the class but not outside

    // protected if use child class this balance then use protected
    // protected _balance: number

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    add(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const poorManAccount = new BankAccount(111, "Mr. X", 200);

  poorManAccount.add(20);
  const myBalance = poorManAccount.getBalance();
  console.log(myBalance);
}
