let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = array.reduce((acc, currvalue) => {
//   console.log("Accumulator: ", acc, "Current Value: ", currvalue);
//   return acc + currvalue;
// }, 1);
let sum2 = array.reduce(
  (acc, currvalue) =>
    // console.log("Accumulator: ", acc, "Current Value: ", currvalue);
    acc + currvalue,
  1
);
//console.log("Sum of array elements: ", sum2);

let courses = [
  { name: "JavaScript", price: 100 },
  { name: "Python", price: 200 },
  { name: "Java", price: 300 },
  { name: "C++", price: 400 },
];
// reduce is used to reduce the array to a single value
// It takes a callback function and an initial value as parameters
let totalPrice = courses.reduce((acc, item) => item.price + acc, 0);

console.log("Total Price of Courses: ", totalPrice);

