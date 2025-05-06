let date = new Date();

console.log("Get Time:- " + date.getTime());
console.log("to ISO String:- " + date.toISOString());
console.log("to JSON:- " + date.toJSON());
console.log("to Date String:- " + date.toDateString());
console.log("to String:- " + date.toString());
console.log("to Locale String:- " + date.toLocaleString()); //! Important method
console.log(typeof date);

console.log(date.getDay());
console.log(date.getHours());
