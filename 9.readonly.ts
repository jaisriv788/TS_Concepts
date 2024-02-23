/*As their is a bit prob with ts that if we have a const except object and array
 then it will behave as const but on both of these it let to change the value so 
 solve this problem ts introduced Readonly we can use it in two ways 
 1. use Readonly keyword infront of every key that you want to behave like const.
 2. place Readonly on whole declaration */

//1

type User1 = {
  readonly username: string;
  readonly password: string;
};

const user1: User1 = {
  username: "alpha",
  password: "Jai@9450",
};

//2.

type User2 = {
  username: string;
  password: string;
};

const user2: Readonly<User2> = {
  username: "beta",
  password: "hello@332",
};

console.log(user1,user2)