/**
 * The above TypeScript code defines a generic function `hello` that takes an argument of any type and
 * returns the same argument.
 * @param {T} arg - The parameter `arg` in the `hello` function and `hello1` arrow function is of type
 * `T`, which means it can be any type as specified during the function call. In this specific case,
 * the argument passed to the `hello` function is a string "2".
 * @returns The function `hello` is returning the argument passed to it, which is the string "2".
 */
function hello<T>(arg: T): T {
  return arg;
}
const hello1 = <T>(arg: T): T => {
  return arg;
};
const res = hello("2");
console.log(res);
