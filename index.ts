#! /usr/bin/env node

interface mybankaccount {
  credit(amount: number): void;
  debit(amount: number): void;
  
}

class Bankaccount implements mybankaccount {
  accountbalance: number;
  constructor(accountbalance: number) {
    this.accountbalance = accountbalance;
  }

  public credit(amount: number) {
    if (amount > 0) {
      this.accountbalance += amount;
      console.log(
        `Your account credit successfully Rs:${amount} and your balance is Rs:${this.accountbalance}`
      );
    } else {
      console.log("Credit Failed");
    }
  }

  public debit(amount: number) {
    if (amount > 0 && amount < this.accountbalance) {
      this.accountbalance -= amount;
      console.log(
        `Your account debit successfully Rs:${amount} and your balance is Rs:${this.accountbalance}`
      );
    } else {
      console.log("Debit Failed");
    }
  }
}
class Customer {
  person: {
    firstname: string;
    lastname: string;
  };
  age: number;
  gender: string;
  mobile: number;
  bankaccount: Bankaccount;

  constructor(
    person: { firstname: string; lastname: string },
    age: number,
    gender: string,
    mobile: number,
    bankaccount: Bankaccount
  ) {
    this.person = person;
    this.age = age;
    this.gender = gender;
    this.mobile = mobile;
    this.bankaccount = bankaccount;
  }
  public display() {
    console.log("Name : " + this.person.firstname + " " + this.person.lastname);
    console.log("Age : " + this.age);
    console.log("Gender : " + this.gender);
    console.log("Mob Number : " + this.mobile);
    console.log("Balance : " + this.bankaccount.accountbalance);
    console.log();
  }
}
const acc1 = new Bankaccount(30000);
const cus1 = new Customer(
  { firstname: "Saqib", lastname: "Siddiqui" },
  39,
  "male",
  3004046478,
  acc1
);

cus1.display();
cus1.bankaccount.debit(1000);
cus1.bankaccount.credit(3000);
console.log();

const acc2 = new Bankaccount(40000);
const cus2 = new Customer(
  { firstname: "Hassan", lastname: "Siddiqui" },
  25,
  "male",
  3431800081,
  acc2
);

cus2.display();
cus2.bankaccount.debit(2000);
cus2.bankaccount.credit(5000);
console.log();
