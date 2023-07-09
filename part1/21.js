// intro to arrays
// reference type 
// how to create a arrays

// ordered collection of items/elements
// special type of objects

let fruits = ["mango","apple","grapes"];
console.log(fruits[1]);

// you can store elements of different data types
let numbers = [1,2,3,5];
console.log(numbers);

//mixed
let mixed = ["mango",1,"apple",3];
console.log(mixed[1]);

//arrays elements can be referred by it's index numbers
// let fruits1 = ["mango","apple","grapes"];
// fruits1[1]="banana";
// console.log(fruits1)

let fruits1 = ["mango","apple","grapes"];
let obj = {};
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits1));
console.log(Array.isArray(obj));
// array is an object