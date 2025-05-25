let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArray = arrayNums.filter((nums) => nums > 4);

let filteredArray2 = arrayNums.filter((nums) => {
  return nums < 4;
});
// in filter if we use arrow function with curly braces, we need to use return statement

//console.log("Filtered Array: ", filteredArray);
console.log("Filtered Array 2: ", filteredArray2);

let library = [
  {
    bookName: "Book 1",
    bookType: "Fiction",
    createdAt: "2023-01-01",
  },
  {
    bookName: "Book 2",
    bookType: "Non-Fiction",
    createdAt: "2023-02-01",
  },
  {
    bookName: "Book 3",
    bookType: "Fiction",
    createdAt: "2023-03-01",
  },
  {
    bookName: "Book 4",
    bookType: "Science",
    createdAt: "2023-04-01",
  },
  {
    bookName: "Book 5",
    bookType: "Fiction",
    createdAt: "2023-05-01",
  },
  {
    bookName: "Book 6",
    bookType: "History",
    createdAt: "2023-06-01",
  },
  {
    bookName: "Book 7",
    bookType: "Fiction",
    createdAt: "2023-07-01",
  },
  {
    bookName: "Book 8",
    bookType: "Biography",
    createdAt: "2023-08-01",
  },
  {
    bookName: "Book 9",
    bookType: "Fiction",
    createdAt: "2023-09-01",
  },
  {
    bookName: "Book 10",
    bookType: "Technology",
    createdAt: "2023-10-01",
  },
];

let filteredBooks = library.filter((book) => book.bookType === "Fiction");
//console.log("Filtered Books: ", filteredBooks);\

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mappedNumbers = numbers.map((num) => num + 10);

//console.log("Mapped Numbers: ", mappedNumbers);

//! map chaining

let chainedMap = numbers
  .map((number) => number * 10)
  .map((number) => number + 1);

//console.log("Chained Map: ", chainedMap);

let chainedMapFilter = numbers
  .map((number) => number * 10)
  .filter((number) => number > 50)
  .map((number) => number + 1);

console.log("Chained Map and Filter: ", chainedMapFilter);
