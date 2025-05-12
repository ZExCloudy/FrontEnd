function calculatePrice(...price) {
  // ... is the rest operator
  // which allows us to pass an indefinite number of arguments
  // it converts it into array and store it in variable price
  // to a function further we can apply business logic to do operations
  // on the arguments passed
  return price;
}

console.log(calculatePrice(100, 200, 300)); // [100, 200, 300]
console.log(calculatePrice(100, 200, 300, 400)); // [100, 200, 300, 400]
function objectFunction(myObject) {
  console.log(`name of user is ${myObject.name} and age is ${myObject.age}`);
}

objectFunction({
  name: "John",
  age: 30,
}); // name of user is John and age is 30

let obj = {
  name: "Pratham",
  ages: 23,
};
objectFunction(obj); // name of user is Pratham and age is 23

// * Ways of Function Declaration
myFunction(); // Function Declaration
function myFunction() {
  console.log("Hello World");
} // Function Declaration
//myFunction2(); // Function Expression
//! When functions are stored in variables  
//! We canot invoke them before the declaration
//! We can only invoke them after the declaration
let myFunction2 = function () {
  console.log("Hello World");
};
