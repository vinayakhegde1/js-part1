// Arrow Function
// Arrow functions are used to shorten the function declaration syntax 
// for 1 parameter then we can remove the parenthesis

const sayHelloWorld = () => {
    console.log("HelloWorld!!!");
}

sayHelloWorld();

const isEven = (Number) =>{
    return Number % 2 === 0;
}
console.log(isEven(4));

