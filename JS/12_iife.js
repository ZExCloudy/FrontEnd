//!     IIFE
// Immediately Invoked Function Expressi

(function chai() {
  console.log("Hello World");
})();

// syntax for iife ()(); The second set of parentheses is used to invoke the function immediately after it is defined.
//Avoid Global Scope Pollution: Variables inside an IIFE are not accessible outside, preventing conflicts with other code.

// How to pass arguments to IIFE

(function (name) {
  console.log(`Hello ${name}`);
})("Pratham");

//Doing same thing with arrow function

((name) => {
  console.log(`Hello ${name}`);
})("Coder");
