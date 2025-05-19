// ! Nullish Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.

let val1;
val1 = null ?? 10;
console.log(val1); // 10
val1 = undefined ?? 10;
console.log(val1); // 10
val1 = null ?? undefined ?? 15;
console.log(val1); // 15
val1 = null ?? myFunction() ?? 15;
console.log(val1); // 20
function myFunction() {
  console.log("Hello World");
  return 20;
}
