interface User {
  name: string;
  age: number;
}

type data = Record<string, User>;
//above line can also be written as
//type data = {[key: string] : User}

const obj: data = {
  alpha: { name: "ajay", age: 23 },
  beta: { name: "irphan", age: 18 },
};

const user1 = obj["alpha"]
const user2 = obj["beta"]

console.table([user1,user2]);

export{}