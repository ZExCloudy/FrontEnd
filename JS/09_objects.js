// ! WHENEVER WE SE {} IT MEANS OBJECT IS BEING DESTRUCTURED
const target = {
  brand: "Toyota",
  model: "Corolla",
};

const source = {
  name: "Alice",
  age: 30,
};

const merged = Object.assign({}, target, source); // {}will create a new object and store the merged properties
console.log(merged); // { brand: 'Toyota', model: 'Corolla', name: 'Alice', age: 30 }

// console.log(Object.keys(merged)); // ['brand', 'model', 'name', 'age']
// console.log(Object.values(merged)); // ['Toyota', 'Corolla', 'Alice', 30]
// console.log(merged.hasOwnProperty("name")); // true);
// console.log(merged.hasOwnProperty("bran")); // false

const {name: n} = merged; // Destructuring assignment
console.log(n); // Alice


