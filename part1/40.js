// block scope vs function scope 

// let and const are block scope 
// var is function scope 

// for example 

{
    let firstName = "Vinayak";
}
console.log(firstName);  //ReferenceError: firstName is not defined


// Global Scope: Variables declared Globally
//  (outside any function) have Global Scope.
// global scope variables can be accessed from anywhere in the js

//Local Scope : variables declared inside the func
// are considered to be local scope and further divided into function scope
// & block scope 

//Function Scope : Variable is declared inside a function 
// it is only accessible within that function and cannot
// be used outside 

// Block Scope : A var when declared inside the if or switch conditions
// or inside for or while loops are accessible within that particular(condition or loop)
// the variable declared inside the curly braces are called within the block scope 

