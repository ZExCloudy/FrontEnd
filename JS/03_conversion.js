let number = 33;
let string = "44";
let falseNumber = "33abc";
let boolean = true;
let undefine = undefined;
let noll = null;

let valueInNumber = Number(number);
let valueInString = Number(string);
let valueInBoolean = Number(boolean);
let valueInNoll = Number(undefine);
let valueInUndefine = Number(noll);
let valueInfalseNumber = Number(falseNumber);

console.table([
  valueInBoolean,
  valueInNoll,
  valueInNumber,
  valueInString,
  valueInUndefine,
  valueInfalseNumber,
]);

// * 33 -> 33
// * '33abc' -> NaN
// * boolean -> 0 or 1
// * undefined -> 0
// * null -> NaN

let loggedIn = "";
let toBoolean = Boolean(loggedIn);
console.log(toBoolean);

// ! Boolean will only convert 0 and empty String to false rest all integers will be converted as true

// * 1-> true 0 -> false
// * "" -> false "any value" -> true
