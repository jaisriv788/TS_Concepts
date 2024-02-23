/* The code defines an abstract class User with a subclass Account that extends it, and creates an
instance of Account called user1. Here An Object can not be created from user class*/
abstract class User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  abstract call(): void;
}

class Account extends User {
  age: number;
  constructor(username: string, password: string, age: number) {
    super(username, password);
    this.age = age;
  }
  call() {
    console.log("hello");
  }
}

const user1 = new Account("jai9450", "Jai@000", 23);
console.log(user1);

export {};
