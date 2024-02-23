/**
 * The function `ageSum` calculates the sum of ages of two users.
 * @param {User} user1 - {name: "Jai", age: 25}
 * @param {User} user2 - {name: "Devyanshi", age: 24}
 * @returns The `ageSum` function is being called with two user objects as arguments, each containing a
 * `name` and an `age` property. The function calculates the sum of the ages of the two users and
 * returns the result. In this case, the ages of the users are 25 and 24, so the function will return
 * 49.
 */
interface User {
  name: string;
  age: number;
}

type Users = {
  name: string;
  age: number;
};

function ageSum(user1: User, user2: User): number {
  return user1.age + user2.age;
}

const result = ageSum({ name: "Jai", age: 25 }, { name: "Devyanshi", age: 24 });

console.log(result);

export {};
