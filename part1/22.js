// array Push pop shift unshift
//arrays are mutable


let fruits = ["mango","apple","grapes"];

//push - adds  new element in the end of an array
fruits.push("orange");
console.log(fruits);

//pop- removes the element at the specified position

let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruit is: ",poppedFruit);

//unshift method
fruits.unshift("grapes");
fruits.unshift("Pears");
console.log(fruits);

//shift method
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is: ",removedFruit);

// push and pop are much faster than shift and unshif 
