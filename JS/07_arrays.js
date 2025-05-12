let myArray = [0, 1, 2, 3, 4, 5, 6];

myArray.push(7);
myArray.slice(0, 4);

console.log("A " + myArray);

myArray.splice(1, 4); //* Removes part of array and creates new one including last index

console.log("B " + myArray);

let villans1 = ["Thanos", "Vill Gax", "Pain"];
let villans2 = ["Freiza", "Akaza", "Muzan"];

// let pushedArray = villans1.push(villans2);

// console.log(pushedArray.toString());

//villans1.concat(villans2);

//let allVillans = villans1.concat(villans2); //* Creates new array without modifying current array
let allVillans = [...villans1, ...villans2]; //can be used to merge multiple arrays
console.log(allVillans);

let nestedArray = [1, 2, 3, [4, 5, 6], [5, 6, 8, [9, 0, 7]]];

let flatArray = nestedArray.flat(Infinity);

//console.log(flatArray);
console.log("Mixed Array :- " + Array.of(flatArray, villans1));
