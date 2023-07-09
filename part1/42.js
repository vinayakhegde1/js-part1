// parameter destructuring 
// unpacking the argument object into separate parameter variables
// Object
// usefull in react 

const person = {
    firsName : "vinayak",
    gender : "male",
}
//  function printDetails(obj){
//     console.log(obj.firsName);
//     console.log(obj.gender);
//  }

function printDetails({firsName,gender}){
    console.log(firsName);
    console.log(gender);
 }
 printDetails(person);