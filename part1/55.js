// Maps 












//object literal
//key-> string
//key->symbol


// const person = {
//     firstName : 'vinayak',
//     age: 20,
//     1:"one" 
// }


// console.log(person);

const person = new Map();
person.set('firstName', 'Vinayak');
person.set('age', 20);
person.set(1, 'one');
person.set([1,2,3], 'onetwothree');
person.set({1: 'one'}, 'onetwothree');
console.log(person);
for(let key of person){
    console.log(key , typeof key);
}