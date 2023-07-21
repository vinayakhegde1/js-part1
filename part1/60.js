// // call apply bind 
// const Name = {
//     firstname: "Vinayak",
//     lastname : "Hegde",
// }

// Name.printFullName();

// let printFullName =  function(){
//         console.log(this.firstname + " "+ this.lastname);
//     }

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// //function borrowing 
// Name.printFullName();

// function hello(){
//     console.log("hello world");
// }

// hello.call();

//example 2 
   
 function about(hobby, favMusic){
        console.log(this.firstname, this.age, hobby, favMusic);
    } 



const user1 = {
    firstname: "meena",
    age: 50,
    about: function(hobby, favMusic){
        console.log(this.firstname, this.age, hobby, favMusic);
    }
 }
    const user2 = {
        firstname: "nagveni",
        age: 60,
    }

//call() :
//apply() : apply method takes the argument in an array
// bind :  
 //call method : - user1.about.call(user1 , "kalimba", "Till i collapse ");
// apply method : - user1.about.apply(user1 , ["kalimba", "Till i collapse "]);

//bind method
// allows to create a new function from an existing 
// function 
// change new function this's context and provide any arguments you want 
// the new function to be called 