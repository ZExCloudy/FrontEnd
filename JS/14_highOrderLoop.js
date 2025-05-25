let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const value of arr) {
  //console.log(value);
}

let myMap = new Map();
myMap.set("JS", "JavaScript");
myMap.set("HTML", "Hyper Text Markup Language");
myMap.set("CSS", "Cascading Style Sheet");

//console.log("Normal loogging");

for (const value of myMap) {
  //  console.log(value);
}

console.log("Destructuring the map");

for (const [key, value] of myMap) {
  // [key,value] is destructuring the map into key and value
  //  console.log(key + " = " + value);
}

// The for of loop does not work with objects
// for that we need to use for in loop
let myObject = {
  cpp: "C++",
  html: "Hyper Text Markup Language",
  js: "JavaScript",
};

for (const key in myObject) {
  // console.log(keys + " = " + myObject[key]);
}

// for each
let myArray = ["JS", "HTML", "CSS", "C++", "Java"];

myArray.forEach((value) => {
  console.log("Value: " + value);
});

function printMe(value) {
  console.log(value);
}

myArray.forEach(printMe); // passing function as a parameter
// No need to execute the function just pass the function name

myArray.forEach((value, index, array) => {
  console.log(value, index, array);
});
