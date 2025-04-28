let myString = "Pratham";

// console.log(myString.toUpperCase());
// console.log(myString.charAt(3));
// console.log(objectString.charAt(4));
// console.log(objectString.toLowerCase());
let objectString = new String("objectString");
let slicedString1 = objectString.slice(-8, 5);
// ! Negative value will take value from end for eg. -8 will take 8th value from end i.e c
let slicedString2 = objectString.slice(0, -4);
let subString1 = objectString.substring(-2, 4);
console.log(
  `String 1-> ${slicedString1},  String 2-> ${slicedString2}, String 3-> ${subString1}`
);

let games = "bgmi-valo-mario";

console.log(games.split("-"));
