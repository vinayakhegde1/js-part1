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


 
user1.about.call(user1 , "kalimba", "Till i collapse ");