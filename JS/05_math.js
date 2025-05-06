// ++++++++++++++++ Maths ++++++++++++++++++\
console.log(Math.abs(-7));

console.log(Math.round(9.4));

console.log(Math.ceil(9.1));

console.log(Math.floor(9.9));

console.log(Math.min(2, 4, 5, 2, 8, 6, 9));

let arrays = [4, 5, 1, 2, 8, 9, 5];

console.log(Math.max(arrays));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10 + 1));

// # To get values in desired range multiply it  by max - min +1 then add min

let min = 12;
let max = 14;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Now all values will be in between 12 and 14
