// while loop in array

const cars = ["BMW", "Volvo", "Saab", "Ford"];
const cars1 = [];
let i = 0;
while(i<cars.length){
    cars1.push(cars[i].toLocaleLowerCase());
    i++;
}
console.log(cars1);