//array destructuring

const arr = ["val1","val2","val3","val4"];
// let var1 = arr[0];
// let var2 = arr[1];
// console.log("value of var1",var1);
// console.log("value of var2",var2);

let[var1, var2,...mynewarr] = arr;

console.log("value of var1",var1);
console.log("value of var2",var2);
console.log(mynewarr);

//example

const vehicles = ['mustang', 'f-150', 'expedition'];

let [car,truck,suv] = vehicles;
console.log("value of car",car);
console.log("value of car",truck);
console.log("value of car",suv);
console.log(vehicles);

