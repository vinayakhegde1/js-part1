//foreach method

const numbers = [4,5,6,7];

// numbers.forEach(function(numbers,index){
//     console.log(`index is ${index} number is ${numbers}`)
// });

// numbers.forEach(function(numbers){
//     console.log(numbers*2);
// });

const person = [
    {firstName: "vinayak" , age:20},
    {firstName: "nisarga" , age:22},
    {firstName: "vinay" , age:25},
    {firstName: "aayushi" , age:30}, 
];

// person.forEach(function(person){
//     console.log(person.firstName);
// })

// with arrow function 
    person.forEach((person , index)=>{
        console.log(person.age , index);
    })


// Example 1: In this example, 
// the Array.forEach() method is used to copy 
// every element from one array to another.

function func() {
 
    // Original array
    const items = [12, 24, 36];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item + item+2);
    });
    console.log(copy);
}
func();