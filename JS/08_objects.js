const sym = Symbol("uniqueSymbol"); // Creating a unique symbol
const user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  isActive: true,
  role: "admin",
  [sym]: "uniqueSymbol",
};
user.name = "Jane Doe"; // Modifying the name property
user.height = 170; // Adding a new property
console.log(user); // { name: 'Jane Doe', age: 30, email: '
// Object.freeze(user); // Prevents any changes to the user object
user.age = 25; // This will not change the age property
user.height = 180; // This will not add a new property
console.log(user);
console.log(user.name); // Accessing the name property

user.myFunction = function () {
  console.log(`Hello, World!, ${this.name}`);
};
user.myFunction(); // Calling the function
