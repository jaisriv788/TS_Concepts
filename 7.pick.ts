/**
 * The function `updateUser` takes an object with `username`, `password`, and `age` properties and logs
 * the data.
 * @param {updatedData} updateData - The `updateData` parameter in the `updateUser` function is an
 * object that contains the fields `username`, `password`, and `age`. These fields are of the types
 * specified in the `updatedData` type, which is a subset of the `User` interface. The `updateUser
 */
interface User {
    id:string,
    username:string,
    email:string,
    password:string,
    age:number
}

type updatedData = Pick<User,'username' | 'password' | 'age'>

function updateUser (updateData : updatedData) {
    //update code in conjuction with database
    console.log(updateData);
}

updateUser({username:"aplha",password:"Jai@9450",age:25})

export{};