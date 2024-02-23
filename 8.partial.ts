/**
 * The code defines an interface for a User with required properties, then demonstrates two ways to
 * make certain properties optional when updating user data.
 * @param {partialData} updateData - The `updateData` parameter in both examples is an object that can
 * contain optional properties for updating user information. It can include properties like
 * `username`, `password`, and `age`. The properties are not required and can be omitted if not needed
 * for the update operation.
 */
interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  age: number;
}

//above interface requires all the keys but to make in partial or optional we can do one of the following things

//1.

type updatedData = Pick<User, "username" | "password" | "age">;

type partialData = Partial<updatedData>;

function updateUser(updateData: partialData) {
  console.log(updateData);
}

updateUser({ username: "aplha", age: 24 });

//2.

interface optionalData {
  username?: string;
  password?: string;
  age?: number;
}

function updateuser(updateData: optionalData) {
  console.log(updateData);
}

updateuser({ username: "aplha", password: "Jai@9450" });

export {};
