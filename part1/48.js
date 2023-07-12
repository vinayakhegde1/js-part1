// filter method 
//used to filter the elements in an array

const numbers = [1,2,3,45,67,8,98];

const isEven = (number)=>{
    return number%2 ===0;
}

const evennumbers = numbers.filter(isEven);
console.log(evennumbers);

//example 2
const cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

const bigcities = cities.filter(function(e){
    return e.population > 2000000;
});

console.log(bigcities);