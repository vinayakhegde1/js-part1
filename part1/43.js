// callback function 
// A JavaScript callback is a function which is 
// to be executed 
// after another function has finished execution.
// callback function 

// const myFun2 = () => {
//     console.log('inside my func 2')
// }

// function myFun(callback){
//     callback();
// }

// myFun(myFun2);

//example 1
function greet(name, myfunction){
    console.log('Hello world');

    myfunction(name);
}

function sayName(name){
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000, 'John', sayName);

