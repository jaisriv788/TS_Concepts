/**
 * The code defines a TypeScript function that takes a function as a parameter and calls it.
 * @param fullName - The `fullName` parameter in the `name` function is a function that takes no
 * arguments and returns void.
 */
function name(fullName: () => void) {
  fullName;
}

function fullName(): void {
  console.log("hello jai");
}

name(fullName);

export {};
