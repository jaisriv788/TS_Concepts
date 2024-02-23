/* The class `User` in TypeScript defines properties for username and password, with a constructor to
initialize them and a method `hello` that logs "Hello World". */
class User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  hello() {
    console.log("Hello World");
  }
}
