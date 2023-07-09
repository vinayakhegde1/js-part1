// for of loop
// for of loops through the values of an iterable object
const cars = ["BMW", "Volvo", "Saab", "Ford"];
const cars2 = [];
for(let car of cars){
    cars2.push(car.toLocaleLowerCase());
}
console.log(cars2);

// for in loop in array

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
const cars3 = [];
for(index  in cars1){
    console.log(cars1[index]);
}
