/**
 * The TypeScript code defines a User type, creates a map of users with usernames as keys, and
 * retrieves and displays user information.
 * @property {string} username - The `username` property is a string that represents the username of a
 * user in the User type.
 * @property {string} email - alpha778@gmail.com, beta@gmail.com
 * @property {string} password - The password property in the User type is a string that stores the
 * password of a user account. In the provided code snippet, the passwords for the users "alpha" and
 * "beta" are "Alpha@123" and "beta@123" respectively.
 */
type User = {
  username: string;
  email: string;
  password: string;
};

const users = new Map<string, User>();

users.set("alpha", {
  username: "alpha",
  email: "alpha778@gmail.com",
  password: "Alpha@123",
});
users.set("beta", {
  username: "beta",
  email: "beta@gmail.com",
  password: "beta@123",
});

const user1 = users.get("beta");
const user2 = users.get("alpha");

console.table([user1, user2]);
export {};
