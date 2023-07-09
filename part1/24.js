// how to clone array

//how to concatenate two arrays

let array1 = ["item1","item2"];
// let array2 = ["item1","item2"]; // should not use for cloning
// let array2 = array1.slice(0).concat(["item3","item4"]); 
// let array2 = [].concat(array1);

// new way to clone an array
//spread operator (spread operator allows to quickly clone or copy all/part of an existing array/object into another array/obj)
//... -> spread operator
let onemorearray = ["item3","item4"]
let array2 = [...array1,...onemorearray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);


