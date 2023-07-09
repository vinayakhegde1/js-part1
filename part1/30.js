// objects
// array are good but not sufficient for real world data 
// objects are stored in key value pair 
// objects dont have index position 

// how to create a object 

// const person = {name:"vinayak", age:20,};
// person.gender = "male" //you can add data in an object
// console.log(typeof person);

// how to acess data from objects
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// const person2 = {
//     name:"harsh",
//     age:20,
//     hobbies:["guitar", "reading","coding"]

// }
// person2.gender = "male";
// console.log(person2);

//difference between dot and bracket notations

const person2 = {
    name:"harsh",
    age:20,
    "person2 hobbies":["guitar", "reading","coding"]

}
console.log(person2["person2 hobbies"]);