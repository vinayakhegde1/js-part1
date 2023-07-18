// this keyword 

// if (true){
//     console.log(this);
// }

//this is always  going to be window when we are outside the 
// scope 

// function talk(){
//     return this
// }
// const me = {
//     name : 'Vina',
//     talk
// }
// console.log(me);

const person = {
    firstName: "vinayak",
    age : 20 ,
    about : function(){
        console.log("person name is vinayak & age is 20");
    }
}
console.log(person.about);