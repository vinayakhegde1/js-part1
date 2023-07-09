// function in javascript 

// A function is a block of code that performs a specific task.

function sayHelloWorld(){
    console.log("HelloWorld!!!");
}

sayHelloWorld();


//example2

function twomultiplyfour(){
    console.log(2*4);
}

twomultiplyfour();

//ex3

function sumTwoNumbers(num1, num2){  //parameters
    return num1 + num2 ;
}

const returnedValue = sumTwoNumbers(4,5);  //arguments
console.log(returnedValue);

// if no value is passed then the output will be NaN which stands for not a Number

// odd or even
// input :1 no
// output : true ,false 

function EveorOdd(Number){
    return Number % 2 ===0;
}

console.log(EveorOdd(5));

//ex4
// input : string 
//  output : firstCharacter

function firstCharacter(string){
    return string[0];
}

console.log(firstCharacter("abc"));


// ex5
//function
// input : Array, target 
// output: index of target if target present in the Array 

function findTarget(array, target){
    for(let i = 0; i<=array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myarr = [1,4,5,6]
const ans = findTarget(myarr, 10);
console.log(ans);


// function expression
const sayHelloWorld = function (){
    console.log("HelloWorld!!!");
}

sayHelloWorld();

