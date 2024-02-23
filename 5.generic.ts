/**
 * The code defines an enum for mathematical operators and a function to return the first element of an
 * array, demonstrating the usage of generics in TypeScript.
 * @param {T[]} arr - arr is an array of type T, where T can be any data type. In this specific case,
 * the array `arr` contains strings.
 * @returns The code will return an error because `val.toLocaleUpperCase()` should be
 * `val.toUpperCase()` to convert the string to uppercase.
 */
enum Operator {
  add,
  substract,
  multiply,
  divide,
}

console.log(Operator["0"]);

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const val = firstElement<string>(["jai", "srivastava"]);
console.log(val.toLocaleUpperCase());
